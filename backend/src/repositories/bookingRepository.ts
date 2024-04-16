import {Bookings, PrismaClient} from '@prisma/client'
const db = new PrismaClient()

export const createBookingRepository = async (book:BookingRequest)=>{
    try{
        return await db.bookings.create({data:{uid:book.uid!,roomID:book.roomID!,date:book.date}})
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
        const reqTime = new Date(book.date!).getTime()
        return (await db.bookings.findMany({where:{roomID:book.roomID}})).filter((v:Bookings)=> Math.round((new Date(v.date).getTime()-reqTime)/(1000*86400))<1)
    }
    catch(err){
        return err
    }
}