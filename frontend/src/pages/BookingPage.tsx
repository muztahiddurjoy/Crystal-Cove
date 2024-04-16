import { Box, Button, FormLabel, GridItem, Select, SimpleGrid, Stack, Text, VStack, useToast } from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import RoomAdapterSkeleton from "../components/RoomAdapter/RoomAdapterSkeleton"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { apiurl } from "../apiurl"
import RoomAdapter from "../components/RoomAdapter/RoomAdapter"
import { ifAuthenticaed } from "../utils/ifAuthenticated"

const BookingPage = () => {
  const days:Array<string> = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date()
  const {id} = useParams()
  const router = useNavigate()
  const [creating, setcreating] = useState(false)
  const [details, setdetails] = useState({
    name: '',
    bath:0,
    bed:0,
    price: 0,
    desc:'',
    image:'',
    id:id!
  })
  const [bookDate, setbookDate] = useState<Date|null>(null)
  const [booked, setbooked] = useState<any[]>([])
  const toast = useToast()
 
  



  const getRooms = ()=>{
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
  }
  
  const getBookings = ()=>{
    axios.get(`${apiurl}/booking`,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res)=>{
      if(Array.isArray(res.data)){
        setbooked(res.data.map((v:Booking)=> {
          console.log((((new Date().getTime()-new Date(v.date).getTime())/1000)/86400))
          if(((((new Date().getTime()-new Date(v.date).getTime())/1000)/86400)<1&&v.roomID==id)){
            console.log(days[new Date(v.date).getDay()])
            return days[new Date(v.date).getDay()]
          }
        }
      ))
      setbooked((arr)=> arr.filter(function(element) {
        return element !== undefined;
      }))
      }
    })
    
  }

  useEffect(() => {
    ifAuthenticaed(router)
    getRooms()
    getBookings()
  }, [id])
  
  useEffect(() => {
    console.log(booked)
  }, [booked])
  

  const bookHotel = () =>{
    if(bookDate==null){
      toast(
        {
          title:'Invalid Day!',
          description:`Please pick a day`,
          status:'error',
          isClosable:true,
          position:'bottom-left'
        }
      )
    }
    else{
    setcreating(true)
    axios.post(`${apiurl}/booking`,{
      uid: localStorage.getItem('uid'),
      roomID: id,
      date: bookDate.toISOString()
    },{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res)=>{
      if(res.status==201){
        setbookDate(null)
        getBookings()
        setcreating(false)
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
      
    }).catch((err)=>{
      console.log(err)
      setcreating(false)
    })
  }
  }

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
              <Select value={bookDate?days[bookDate!.getDay()]:'Pick Option'} placeholder={bookDate?days[bookDate!.getDay()]:'Pick Option'} onChange={e=> setbookDate(new Date(Number(e.target.value)))}  borderColor="orange.400" _focus={{borderColor:"orange.500"}} w={200}>
                {days.map((v:string,i:number)=> ((today.getDay()<=days.indexOf(v))&&!booked.includes(v))&&<option key={new Date().setDate((new Date().getDate()+i)-today.getDay())} value={new Date().setDate((new Date().getDate()+i)-today.getDay())}>{v}</option>)}
              </Select>
              </Box>
            </Stack>
            <Text mt={10} color="orange.500" fontWeight={700} fontSize={25}>{details.price} <span style={{color:'gray',fontSize:16,fontWeight:400}}>/night</span></Text>
            <Button isDisabled={(booked.length+new Date().getDay())>6} isLoading={creating} onClick={bookHotel} bg="orange.400" color="white" _hover={{bg:"orange.500"}}>Book</Button>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Footer/>
    </Box>
  )
}

export default BookingPage