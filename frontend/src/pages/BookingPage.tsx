import { Box, Button, FormLabel, GridItem, Select, SimpleGrid, Stack, Text, VStack, useToast } from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import RoomAdapterSkeleton from "../components/RoomAdapter/RoomAdapterSkeleton"
import { useState } from "react"

const BookingPage = () => {
  const days:Array<string> = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [details, setdetails] = useState({
    name: '',
    bath:0,
    beds:0,
    price: 0,
    availableToday:false,
    desc:'',
    image:''
  })
  const [bookDetails, setbookDetails] = useState({
    checkIn:days[new Date().getDay()],
    checkOut: days[new Date().getDay()]
  })
  const toast = useToast()
  const bookHotel = () =>{
    toast(
      {
        title:'Booked!',
        description:`This room is 
        booked for you on ${bookDetails.checkIn}`,
        status:'success',
        isClosable:true,
        position:'bottom-left'
      }
    )
  }
  return (
    <Box>
      <Navbar/>
      <Box my={10} p={{base:3,md:10}}>
        <Text fontSize={25} fontWeight={700} color="orange.500">Confirm Your Booking</Text>
        <SimpleGrid mt={10} columns={{base:1,md:2}}>
          <GridItem>
            <RoomAdapterSkeleton/>
          </GridItem>
          <GridItem>
            <VStack align="end">
            <Stack align="end" justify="end" direction={{base:"column",md:"row"}}>
              <Box>
              <FormLabel>Check In</FormLabel>
              <Select placeholder={days[new Date().getDay()]} borderColor="orange.400" _focus={{borderColor:"orange.500"}} w={200}>
                {days.map((v,i)=> <option key={i}>{v}</option>)}
              </Select>
              </Box>
              <Box>
              <FormLabel>Check Out</FormLabel>
              <Select placeholder={days[new Date().getDay()]} borderColor="orange.400" _focus={{borderColor:"orange.500"}} w={200}>
                {days.map((v,i)=> <option key={i}>{v}</option>)}
              </Select>
              </Box>
              
            </Stack>
            <Text mt={10} color="orange.500" fontWeight={700} fontSize={25}>1000 <span style={{color:'gray',fontSize:16,fontWeight:400}}>/night</span></Text>
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