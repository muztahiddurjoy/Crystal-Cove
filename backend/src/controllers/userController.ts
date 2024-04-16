import {Request, Response, Router} from 'express'
const router = Router()
import {getUserService} from '../services/userService'

export const getUserController = async (req:Request, res:Response) => {
    const user = await getUserService(req.user?.uid!)
    res.status(200).json(user)
}