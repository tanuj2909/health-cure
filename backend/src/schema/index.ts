import {z} from 'zod'

export const LoginSchema = z.object({
    name: z.string().min(1, {
        message:  "Name is required"
    }),
    email: z.string().email({
        message: "Email is Required"    
    }),
    password: z.string().min(6, {
        message: "Password should not be less than 6 character "
    })
})