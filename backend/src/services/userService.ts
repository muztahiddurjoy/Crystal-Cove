import {findUserById} from '../repositories/userRepositories'
export const getUserService = async (id:string) => {
    return await findUserById(id)
}