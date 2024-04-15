import { Request, Response } from "express"
import { createRoom, getRoomsService, getSingleRoomService } from "../services/roomService"


export const getSingleRoomController = async (req:Request, res:Response) => {
    const id = req.params.id
    const room = await getSingleRoomService(id)
    res.status(200).json(room)
}

export const getRoomsController = async (req:Request, res:Response) => {
    const rooms = await getRoomsService()
    res.status(200).json(rooms)
}

export const createRoomController = async (req:Request, res:Response) => {
    const room = req.body
    const result = await createRoom(room)
    res.status(201).json(result)
}