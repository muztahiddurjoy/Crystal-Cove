import { searchRoomRepository } from "../repositories/searchRepository"

export const searchService = async (search:SearchRequest)=>{
    return await searchRoomRepository(search)
}