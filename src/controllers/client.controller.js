import Client from '../models/client.model.js'

//traer lista de clientes
export const getClient = async (req, res) => {
    const clients = await Client.find({
        user: req.user.id,
    }).populate('user');
    res.json(clients);
};

//solo ver un cliente
export const getClientOne = async (req, res) => {
    const client = await Client.findById(req.params.id);
    if(!client) return res.status(404).json({message: "client not found"})
    res.json(client)
}

//Crear cliente
export const createClient = async(req, res) => {
    const { nombre, descripcion, direccion, web, industria, estado, telefono } =
        req.body;

    const newClient = new Client({
        nombre,
        descripcion,
        direccion,
        web,
        industria,
        estado,
        telefono,
        user: req.user.id,
    });
    const savedClient = await newClient.save()
    res.json(savedClient)
}

//Eliminar cliente
export const deleteClient = async(req, res) => {
    const client = await Client.findByIdAndDelete(req.params.id)
    if(!client) return res.status(404).json({message: "client not found"})
        
        //Lo siguente indica que no es necesario una respuesta pero la accion fue exitosa
        return res.sendStatus(204)
}

//Actualizar cliente
export const updateClient = async (req, res) => {
    //Siempre que se hace un Update tenemos que pasar 2 parametros el primero es el id(req,params.id) y el segundo el de donde va a traer la informacion(req.body) y en este caso damos la instruccion {new:true} la cual indica que quiero que me muestre la informacion de la ultima actualizacion
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(!client) return res.status(404).json({message: "client not found"})

    res.json(client)
}