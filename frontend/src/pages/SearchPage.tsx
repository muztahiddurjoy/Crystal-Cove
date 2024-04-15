import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/react"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import RoomAdapterSkeleton from "../components/RoomAdapter/RoomAdapterSkeleton"
import { useEffect, useState } from "react"
import { useNavigation, useSearchParams } from "react-router-dom"
import axios from "axios"
import { apiurl } from "../apiurl"
import RoomAdapter from "../components/RoomAdapter/RoomAdapter"

const SearchPage = () => {
  const [loading, setloading] = useState(true)
  const [rooms, setrooms] = useState<Array<Room>>([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    setloading(true)
    const bed = Number(searchParams.get('beds'))
    const bath = Number(searchParams.get('baths'))
    axios.get(`${apiurl}/rooms/user/search?bed=${bed}&bath=${bath}`).then((res)=>{
      if(Array.isArray(res.data)){
        setrooms(res.data)
      }
      console.log(res.data)
      setloading(false)
    }).catch((err)=>{
      console.log(err)
      setloading(false)
    })
  }, [])
  

  return (
    <Box>
      <Navbar/>
      <Box my={10} p={{base:3,md:10}}>
        <Text fontSize={30} fontWeight={700} color="orange.500">Search Results</Text>
        <SimpleGrid mt={5} columns={{base:1,md:4}} gap={5}>
          {loading? Array(3).fill(0).map(()=><GridItem>
            <RoomAdapterSkeleton/>
          </GridItem>): rooms.map(((room:Room)=> <GridItem>
            <RoomAdapter {...room} key={room.id}/>
          </GridItem> ))}
          
          
        </SimpleGrid>
      </Box>
      <Footer/>
    </Box>
  )
}

export default SearchPage