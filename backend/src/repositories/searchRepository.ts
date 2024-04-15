import {PrismaClient} from '@prisma/client'
const db = new PrismaClient()


export const searchRoomRepository = async (search:SearchRequest)=>{
    try{
        const result = await db.room.findMany({where:{
            AND:[
                {bath: {equals: search.bath}},
                {bed: {equals: search.bed}}
            ]
        }})
        return result
    }
    catch(err){
        console.log(err)
        return err
    }
}