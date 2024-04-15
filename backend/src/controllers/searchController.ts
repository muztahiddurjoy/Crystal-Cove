import { Request, Response } from "express";
import { searchService } from "../services/searchService";

export const getSearchController = async (req:Request,res:Response) =>{
    const baths = Number(req.query.bath)
    const beds = Number(req.query.bed)
    const result = await searchService({bath:baths,bed:beds})
    res.status(200).json(result)
}