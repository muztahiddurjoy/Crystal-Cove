import {PrismaClient} from '@prisma/client'
const db = new PrismaClient()

export const createUser = async (user:SignupRequest) => {
    try{
        return await db.user.create({data:{email:user.email,password:user.password}})
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