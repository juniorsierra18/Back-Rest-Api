import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { createClient, deleteClient, getClient, updateClient} from '../controllers/client.controller.js'

const router = Router()

//Definir rutas
router.get('/api/client', authRequired, getClient);
router.post('/api/client', authRequired, createClient);

//Rutas por ID
router.get('/api/client/:id', authRequired, getClient)
router.delete('/api/client/:id', authRequired, deleteClient)
router.put('/api/client/:id', authRequired, updateClient)

export default router;