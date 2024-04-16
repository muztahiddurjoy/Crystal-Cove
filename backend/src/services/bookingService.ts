import { createBookingRepository, getBookingsOnDateRepository, getBookingsRepository, getUserBookingsRepository } from "../repositories/bookingRepository"

export const getUserBookingService = async (book:BookingRequest)=>{
    return await getUserBookingsRepository(book)
}

export const getBookingOnDateService = async (book:BookingRequest) =>{
    return await getBookingsOnDateRepository(book)
}

export const getAllBookingsService = async ()=>{
    return await getBookingsRepository()
}

export const createBookingService = async (book:BookingRequest) =>{
    return await createBookingRepository(book)
}