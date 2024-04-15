import {PrismaClient} from '@prisma/client'
const db = new PrismaClient()
import {sign} from 'jsonwebtoken'
export const createUser = async (user:SignupRequest) => {
    try{
        const newUser = await db.user.create({data:{email:user.email,password:user.password}})
        return {token:sign({uid:newUser.uid,email:newUser.email},process.env.AUTH_SECRET!),uid:newUser.uid}
    }
    catch(err){ 
        console.log(err)
        return err
    }
}

export const findUser = async (user:LoginRequest) =>{
    try{
        return await db.user.findUnique({where:{email:user.email}})
    }
    catch(err){
        return err
    }
}

export const findUserById = async (id:string) =>{
    try{
        const result = await db.user.findUnique({where:{uid:id}})
        return {email:result?.email,joined:result?.joined,uid:result?.uid}
    }
    catch(err){
        return err
    }
}