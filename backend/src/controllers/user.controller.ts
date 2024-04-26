import express from 'express'
import {z} from 'zod'
import { LoginSchema } from '../schema';
import { db } from '../db/db';

export const registerUser = async (req: express.Request, res: express.Response) => {
    const {name, email, password} = req.body();

    const user = await db.user.create({
        data: {
            name,
            email,
            password
        }
    })

    if(!user){
        return { error: "Something went wrong"}
    }

    return res.json("User Created")
}
