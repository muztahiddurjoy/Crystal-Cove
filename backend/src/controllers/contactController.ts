import {PrismaClient} from '@prisma/client'
import { Request, Response } from 'express'
import { createContactService, getContactsService } from '../services/contactService'

const db = new PrismaClient()
declare global{
    namespace Express{
    interface User{
        uid:string,
        email:string,
    }
}
}
export const getContactController = async (req:Request, res:Response) => {
   const contacts = await getContactsService()
   res.status(200).json(contacts)
}

export const createContactController = async (req:Request, res:Response) => {
    const contact = req.body
    const result = await createContactService(contact)
    res.status(201).json(result)
}