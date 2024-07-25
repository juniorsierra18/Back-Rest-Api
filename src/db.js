import mongoose from 'mongoose'

export const connectDB = async ()=> {
    try{
        /*Coneccion a la base de datos en localhost*/
        await mongoose.connect("mongodb://localhost/backproject")
        /*Muestra este mensaje si la coneccion fue exitosa */
        console.log("La base de datos este conectada");
    }catch(error){
        /**Muestra el error si la coneccion no se pudo realizar */
        console.log(error);
    }
}