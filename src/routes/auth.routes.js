import { Router } from "express";
import { login, logout, profile, registro } from '../controllers/user.controller.js'
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validatorMiddleware.js'
import { loginSchema, registerSchema } from '../schemas/user.schema.js'

const router = Router();

//Peticiones
router.post('/register',validateSchema(registerSchema), registro)
router.post('/login',validateSchema(loginSchema), login)
router.post('/logout', authRequired, logout)
router.get('/profile', authRequired, profile)

export default router;