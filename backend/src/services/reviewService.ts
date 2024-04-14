import {addReviewRepository,getReviewRepository} from '../repositories/reviewRepository'

export const addReviewService = async (review:Review) =>{
    return await addReviewRepository(review)
}

export const getReviewService = async () =>{
    return await getReviewRepository()
}