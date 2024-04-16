import {PrismaClient} from '@prisma/client'
const db = new PrismaClient()

export const createBookingRepository = async (book:BookingRequest)=>{
    try{
        return await db.bookings.create({data:{uid:book.uid!,roomID:book.roomID!}})
    }
    catch(err){
        return err
    }
}

export const getBookingsRepository = async ()=>{
    try{
        return await db.bookings.findMany()
    }
    catch(err){
        return err
    }
}

export const getUserBookingsRepository = async (book:BookingRequest) =>{
    try{
        return await db.bookings.findMany({where:{uid:book.uid!}})
    }
    catch(err){
        return err
    }
}

export const getBookingsOnDateRepository = async (book:BookingRequest) =>{
    try{
        return await db.bookings.findMany({where:{date:new Date(book.date!)}})
    }
    catch(err){
        return err
    }
}