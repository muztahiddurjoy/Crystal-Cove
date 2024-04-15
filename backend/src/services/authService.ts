
import {hash,compare} from 'bcrypt'
import { createUser, findUser } from '../repositories/userRepositories';

export const signUpService = async (user:SignupRequest) => {
    hash(user.password,process.env.AUTH_SALT!,async (err,hash)=>{
        if(err){
            return err;
        }
        else{
            return await createUser(user)
        }
    })
}

export const loginService = async (user:LoginRequest) => {
    const dbUser:any = await findUser(user)
    compare(user.password!,dbUser?.password!,async (err,result)=>{
        if(err){
            return err
        }
        else{
            if(result){
                return dbUser
            }
            else {
                return {err:'wrong password!'}
            }
        }
    })
}
