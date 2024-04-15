import {PrismaClient} from '@prisma/client'
const db = new PrismaClient()

export const addInfoRepository = async (info:InfoRequest)=>{
    try{
        return await db.information.create({data:info})
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