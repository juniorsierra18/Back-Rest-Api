import mongoose from "mongoose";

/**Creacion de constante para manejar cada tabla como un esquema */
/**Modelo cliente(Tabla cliente) */
const ClienteSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    direccion: {
        type: String
    },
    web: {
        type: String
    },
    industria: {
        type: String
    },
    estado: {
        type: String
    },
    telefono: {
        type: String
    },
    /**Relacion con el modelo User */
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true

})

/** Exporta el modelo, "Client", ClienteSchema es el esquema(Estructura de la tabla) que va a utilizar para el modelo "Client" */
export default mongoose.model('Client', ClienteSchema)