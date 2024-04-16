
import {hash,compare} from 'bcrypt'
import { createUser, findUser } from '../repositories/userRepositories';
import {config} from 'dotenv'
import {sign} from 'jsonwebtoken'
import { User } from '@prisma/client';
config()
export const signUpService = async (user:SignupRequest) => {
    try{
    const hashed = await hash(user.password,Number(process.env.AUTH_SALT!))
    return await createUser({email:user.email,password:hashed})
    }
    catch(err){
        return err
    }
}

export const loginService = async (user:LoginRequest) => {
    try{
    const dbUser:any = await findUser(user)
    if(dbUser.password){
    const result = await compare(user.password!,dbUser?.password!)
    if(result){
        const jwt = sign({uid:dbUser?.uid,email:dbUser?.email},process.env.AUTH_SECRET!)
        return {token:jwt,uid:dbUser?.uid}
    }
    else{
        return {error:'Wrong Password!'}
    }
}
else{
    return {error:"user doesn't exist"}
}
  }
  catch(err){
    return {error:err}
  }
}
