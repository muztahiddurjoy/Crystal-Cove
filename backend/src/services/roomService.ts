import { createRoomRepository, getRoom, getRoomsRepository } from "../repositories/roomRepository"


export const getRoomsService = async ()=>{
    return await getRoomsRepository()
}

export const getSingleRoomService = async (id:string) =>{
    return await getRoom(id)
}

export const createRoom = async (room:RoomRequest)=>{
    return await createRoomRepository(room)
}