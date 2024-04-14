import { Request, Response } from 'express'
import {addReviewService,getReviewService} from '../services/reviewService'

export const addReviewController = async (req:Request,res:Response)=>{
    const review = req.body
    const result = await addReviewService(review)
    res.status(201).json(result)
}

export const getReviewController = async (req:Request,res:Response)=>{
    const reviews = await getReviewService()
    res.status(200).json(reviews)
}