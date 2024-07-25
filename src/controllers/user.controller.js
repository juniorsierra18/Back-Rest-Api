import { createAccessToken } from '../libs/jwt.js'
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const registro = async (req, res)=>{
    const {username, email, password} = req.body;

    try {
        const usuarioEncontrado = await User.findOne({email})
        if(usuarioEncontrado)
            return res.status(400).json("El email ya esta en uso")
        const passwordHash = await bcrypt.hash(password, 8)

        const nuevoUsuario = new User({
            username, email, password: passwordHash
        })
        //Esta logica es para guardar el documento en la base de datos
        const usuarioGuardado = await nuevoUsuario.save();
        //Utilizando el token
        const token = await createAccessToken({id:usuarioGuardado._id})
        //Crear una cookie en el navegador o el cliente con express
        res.cookie("token", token)
        //Respuesta al cliente
        res.json({
            email: usuarioGuardado.email,
            username: usuarioGuardado.username,
            id: usuarioGuardado.id
            })
    } catch (error) {
        res.status(500).json([error.message])
    }
}

export const login = async (req, res)=>{
    const {email, password} = req.body;

    try {
        //Guardamos en la variable el usuario o el email que encontramos en la base de datos 
        const userFound = await User.findOne({email})
        //Hacemos una validacion
        if(!userFound) return res.status(400).json(["User not found"])

        //Logica para verificar el password del usuario con el password de la base de datos del email que encontramos
        const isMatch = await bcrypt.compare(password, userFound.password)
        //Hacemos una validacion
        if(!isMatch) return res.status(400).json(["incorrect Password"])
        
        //utilizar el token
        const token = await createAccessToken({id: userFound._id})//Enviamos el id para que lo cree como un token
        
        //Creo una cookie que ya viene de express, para que se crre directamente la cookie en nuestro navegador
        res.cookie("token", token)

        //Respuesta al cliente
        res.json({
            email: userFound.email,
            username: userFound.username,
            id: userFound.id,
            createdAt: userFound.createdAt
        })
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const logout = (req, res) =>{
    res.cookie("token", "", {
        expires: new Date(0),
    });
    return res.sendStatus(200)
}

export const profile = async(req, res)=>{
    const usuarioEncontrado = await User.findById(req.user.id)

    if (!usuarioEncontrado) return res.status(400).json(["User not found"]);

    return res.json({
        id: usuarioEncontrado._id,
        username: usuarioEncontrado.username,
        email: usuarioEncontrado.email,
    })
}