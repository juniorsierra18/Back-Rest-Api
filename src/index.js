import app from './app.js'
import {connectDB} from './db.js'

/**Llamo la conceccion de la base de datos */
connectDB();
/**Inicializo la aplicacion */
app.listen(3000)
/**Si la aplicacion de inicio correctamente muestra este mensaje en consola*/
console.log('server on port', 3000);