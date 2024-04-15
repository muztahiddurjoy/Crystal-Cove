
import { createContactRepository, getContactsRepository } from "../repositories/contactRepository"

export const getContactsService = async ()=>{
    return await getContactsRepository()
}

export const createContactService = async (contact:ContactRequest)=>{
    return await createContactRepository(contact)
}