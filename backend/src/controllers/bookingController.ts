import { Request, Response } from "express";
import { createBookingService, getAllBookingsService, getUserBookingService,getBookingOnDateService } from "../services/bookingService";

export const createBookingController = async (req:Request,res:Response)=>{
    const book = req.body
    const response = await createBookingService({date:book.date,roomID:book.roomID,uid:req.user?.uid})
    res.status(201).json(response)
}

export const getBookingsController = async (req:Request,res:Response) =>{
    const response = await getAllBookingsService()
    res.status(200).json(response)
}

export const getUserBookingsController = async (req:Request,res:Response) =>{
    const response = await getUserBookingService({uid:req.user?.uid})
    res.status(200).json(response)
}

export const getBookingByDateController = async (req:Request,res:Response) =>{
    const response = await getBookingOnDateService({date:String(req.query.date),roomID:String(req.query.roomID)})
    res.status(200).json(response)
}

