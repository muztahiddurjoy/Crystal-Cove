import {PrismaClient} from '@prisma/client'
const db = new PrismaClient()

export const addInfoRepository = async (info:Info)=>{
    try{
    const information = await db.information.create({data:info})
    return information
    }
    catch(err){
        return err
    }
}

export const getInfoRepositories = async ()=>{
    try{
    const information = await db.information.findMany()
    return information
    }
    catch(err){
        return err
    }
}