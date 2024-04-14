import {PrismaClient,Prisma} from '@prisma/client'
const db = new PrismaClient()
export const getContactsRepository = async ()=>{
    try{
    const contacts = await db.contact.findMany()
    return contacts
    }
    catch(err){
        return err
    }
}

export const createContactRepository = async (contact:Contact)=>{
    try{
    const newContact = await db.contact.create({data:contact})
    return newContact
    }
    catch(err){
        return err
    }
}