import { z } from 'zod';

const userSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    name: z.string().min(4, { message: "Name must be at least 4 characters long" }),
    phoneNumber: z.string().refine(value => /^\d{10}$/.test(value), {
        message: "Invalid phone number "
    }),
    profilePic: z.string().optional(),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    role: z.string().default('user'),
})


export default userSchema;