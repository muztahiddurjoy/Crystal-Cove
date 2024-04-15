import { Request, Response } from "express";
import { loginService, signUpService } from "../services/authService";

export const signUpController = async (req:Request,res:Response)=>{
    const user = req.body
    const result = await signUpService(user)
    res.status(201).json(result)
}

export const loginController = async (req:Request,res:Response)=>{
    const user = req.body
    const result = await loginService(user)
    res.status(200).json(result)
}