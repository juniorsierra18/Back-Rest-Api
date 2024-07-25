import { TOKEN_SECRET } from "../config.js";
import jwt from 'jsonwebtoken'

export function createAccessToken(payLoad){
    //Objeto global de node
    //promesa para utilizar el async await o peticion asincrona
    return new Promise((resolve, reject)=>{
        jwt.sign(
            payLoad,
            TOKEN_SECRET,
            {
                expiresIn:"1d",
            },
            (err,token) =>{
                if(err) reject(err)
                resolve(token)
            }
        )
    })
}