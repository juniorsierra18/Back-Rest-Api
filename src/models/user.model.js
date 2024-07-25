import mongoose from "mongoose";

/**Creacion de constante para manejar cada tabla como un esquema */
/**Modelo user(Tabla User) */
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

/** Exporta el modelo, "User" es la nomenclatura tradicional, userSchema es el esquema(Estructura de la tabla) que va a utilizar para el modelo "User" */
export default mongoose.model("User", userSchema)