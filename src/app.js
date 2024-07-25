import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import clientRoutes from './routes/client.routes.js'

//iniciando el servidor
const app = express();

//Para que express pueda entender y utilizar el formato json
app.use(express.json())
//
app.use(cors())
//Para que el back end entienda las cookies
app.use(cookieParser())

//Utilizar los rutas
app.use("/api", authRoutes)//pongo el /api porque en las rutas no esta
app.use(clientRoutes)//solo pongo la ruta porque en estas ya puse /api

export default app;