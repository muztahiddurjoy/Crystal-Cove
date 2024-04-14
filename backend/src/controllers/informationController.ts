import { Request, Response } from 'express'
import {addInfoService,getInfoService} from '../services/informationService'

export const getInfoController = async (req:Request, res:Response) => {
    const information = await getInfoService()
    res.status(200).json(information)
}

export const addInfoController = async (req:Request, res:Response) => {
    const info = req.body
    const result = await addInfoService(info)
    res.status(201).json(result)
}