import {PrismaClient} from '@prisma/client'
const db = new PrismaClient()

export const createRoomRepository = async (room:RoomRequest) => {
    try{
        return await db.room.create({data:room})
    }
    catch(err){
        return err
    }
}

export const getRoomsRepository = async ()=>{
    try{
        return await db.room.findMany()
    }
    catch(err){
        return err
    }
}

export const getRoom = async (id:string) =>{
    try{
        return await db.room.findUnique({where:{id:id}})
    }
    catch(err){
        return err
    }
}