import {Request, Response, Router} from 'express'
const router = Router()
import {getUserService} from '../services/userService'

export const getUserController = async (req:Request, res:Response) => {
    const id = req.params.id
    const user = await getUserService(id)
    res.status(200).json(user)
}