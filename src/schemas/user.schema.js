import z from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'el nombre de usuario debe ser requerido'
    }),
    email: z.string({
        required_error: 'el email es requerido'
    }).email({
        message: 'email invalido'
    }),
    password: z.string({
        required_error: 'el password es requerido'
    }).min(7,{
        message: 'el password de tener como minimo 7 caracteres'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'el email es requerido'
    }).email({
        message: 'email invalido'
    }),
    password: z.string({
        required_error: 'el password es requerido'
    }).min(7,{
        message: 'el password de tener como minimo 7 caracteres'
    })
})