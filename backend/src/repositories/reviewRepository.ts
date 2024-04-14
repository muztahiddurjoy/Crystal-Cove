import {PrismaClient} from '@prisma/client'
const db = new PrismaClient()

export const getReviewRepository = async ()  => {
    try{
        return await db.review.findMany()
    }
    catch(err){
        return err
    }
}

export const addReviewRepository = async (review:Review) =>{
    try{
        return await db.review.create({data:review})
    }
    catch(err){
        return err
    }
}