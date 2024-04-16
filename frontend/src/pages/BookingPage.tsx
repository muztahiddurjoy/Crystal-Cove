import { Box, Button, FormLabel, GridItem, Select, SimpleGrid, Stack, Text, VStack, useToast } from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import RoomAdapterSkeleton from "../components/RoomAdapter/RoomAdapterSkeleton"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { apiurl } from "../apiurl"
import RoomAdapter from "../components/RoomAdapter/RoomAdapter"

const BookingPage = () => {
  const days:Array<string> = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date()
  const {id} = useParams()
  const router = useNavigate()
  const [details, setdetails] = useState({
    name: '',
    bath:0,
    bed:0,
    price: 0,
    desc:'',
    image:'',
    id:id!
  })
  const [bookDate, setbookDate] = useState(new Date())
  const [booked, setbooked] = useState([])
  const toast = useToast()
  const bookHotel = () =>{
    toast(
      {
        title:'Booked!',
        description:`This room is 
        booked for you on ${days[bookDate.getDay()]}`,
        status:'success',
        isClosable:true,
        position:'bottom-left'
      }
    )
  }

  useEffect(() => {
    axios.get(`${apiurl}/rooms/${id}`).then((res)=>{
      const room = res.data
      setdetails((p)=> {
        return {
          ...p,
          name: room.name,
          bath: room.bath,
          bed:room.bed,
          desc: room.desc,
          image: room.image,
          price: room.price
        }
      })
    }).catch((err)=> {
      console.log(err);
      router('/notfound')
    })
  }, [])
  

  return (
    <Box>
      <Navbar/>
      <Box my={10} p={{base:3,md:10}}>
        <Text fontSize={25} fontWeight={700} color="orange.500">Confirm Your Booking</Text>
        <SimpleGrid mt={10} columns={{base:1,md:3}}>
          <GridItem>
            {details.name?<RoomAdapter notBookable {...details} />:<RoomAdapterSkeleton/>}
          </GridItem>
          <GridItem colSpan={{base:1,md:2}}>
            <VStack align="end">
            <Stack align="end" justify="end" direction={{base:"column",md:"row"}}>
              <Box>
              <FormLabel textAlign="right">Day (This Week)</FormLabel>
              <Select value={days[bookDate.getDay()]} onChange={e=> setbookDate(new Date(Number(e)))} placeholder={days[bookDate.getDay()]} borderColor="orange.400" _focus={{borderColor:"orange.500"}} w={200}>
                {days.map((v:string,i:number)=> today.getDay()<days.indexOf(v)&&<option key={i} value={new Date().setDate((new Date().getDate()+i)-today.getDay())}>{v}</option>)}
              </Select>
              </Box>
            </Stack>
            <Text mt={10} color="orange.500" fontWeight={700} fontSize={25}>{details.price} <span style={{color:'gray',fontSize:16,fontWeight:400}}>/night</span></Text>
            <Button onClick={bookHotel} bg="orange.400" color="white" _hover={{bg:"orange.500"}}>Book</Button>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Footer/>
    </Box>
  )
}

export default BookingPage