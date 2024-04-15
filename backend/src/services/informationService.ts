
import {addInfoRepository,getInfoRepositories} from '../repositories/infoRepository'

export const getInfoService = async ()=>{
    return await getInfoRepositories()
}

export const addInfoService = async (info:InfoRequest)=>{
    return await addInfoRepository(info)
}