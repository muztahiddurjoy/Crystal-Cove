
import {hash,compare} from 'bcrypt'
import { createUser, findUser } from '../repositories/userRepositories';
import {config} from 'dotenv'
import {sign} from 'jsonwebtoken'
config()
export const signUpService = async (user:SignupRequest) => {
    const hashed = await hash(user.password,Number(process.env.AUTH_SALT!))
    return await createUser({email:user.email,password:hashed})
}

export const loginService = async (user:LoginRequest) => {
    const dbUser:any = await findUser(user)
    const result = await compare(user.password!,dbUser?.password!)
    if(result){
        const jwt = sign({uid:dbUser?.uid,email:dbUser?.email},process.env.AUTH_SECRET!)
        return {token:jwt}
    }
    else{
        return {error:'Wrong Password!'}
    }
}
