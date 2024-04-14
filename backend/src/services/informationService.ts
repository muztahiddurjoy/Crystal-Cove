import {addInfoRepository,getInfoRepositories} from '../repositories/infoRepository'

export const getInfoService = async ()=>{
    return await getInfoRepositories()
}

export const addInfoService = async (info:Info)=>{
    return await addInfoRepository(info)
}