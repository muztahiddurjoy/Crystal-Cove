import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import RoomAdapter from "../../RoomAdapter/RoomAdapter"
import room1 from '../../../assets/rooms/1.jpg'
import RoomAdapterSkeleton from "../../RoomAdapter/RoomAdapterSkeleton"
import { useEffect, useState } from "react"
import axios from "axios"
import { apiurl } from "../../../apiurl"
const Rooms = () => {
  const [rooms, setrooms] = useState<Array<Room>>([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setloading(true)
    axios.get(`${apiurl}/rooms`).then((res)=>{
      setrooms(res.data)
      setloading(false)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <Box p={{base:5,md:10}}>
      <Text textAlign="center" fontSize='3xl' fontWeight={700} color="orange.400">Our Rooms</Text>
      <Grid mt={5} templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap={5} px={{base: 5, md: 20}}>
        {loading?Array(6).fill(0).map(()=><GridItem>
          <RoomAdapterSkeleton/>
        </GridItem>):rooms.map((room:Room)=>{
          return <GridItem>
            <RoomAdapter {...room} key={room.id}/>
          </GridItem>
        })}
      </Grid>
    </Box>
  )
}

export default Rooms