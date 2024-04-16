import {  Box, Button, Card, Flex, GridItem, SimpleGrid, Skeleton, Stack, Text } from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { useEffect, useState } from "react"
import axios from "axios"
import { apiurl } from "../apiurl"
import { Link } from "react-router-dom"

const ProfilePage = () => {
  const [user, setuser] = useState<User>()
  const [bookings, setbookings] = useState<Booking[]>([])
  const [loading, setloading] = useState(false)

  const getUserData = ()=>{
    axios.get(`${apiurl}/user/${localStorage.getItem("uid")}`).then((res)=>{
      setuser(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const getBookings = ()=>{
    setloading(true)
    axios.get(`${apiurl}/booking/user/${localStorage.getItem("uid")}`,{headers:{
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }}).then((res)=>{
      setbookings(res.data)
      setloading(false)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => {
   getUserData()
   getBookings()
  }, [])
  
  return (
    <Box>
      <Navbar/>
      <Box minH="100vh" p={{base:3,md:10}}>
        <Stack direction={{base:'column',md:'row'}} gap={5} justify={{base:'center',md:'start'}} align={{base:'start',md:'center'}}>
          {/* <Avatar size="2xl"/> */}
          <Box>
            {/* <Text fontSize={25} fontWeight={700} color="orange.500">Muztahid Rahman</Text> */}
            <Text color="gray.600" fontSize={20}>Email : {user?.email}</Text>
            <Text color="gray.600" fontSize={20}>Joined : {new Date(String(user?.joined)).toLocaleDateString()}</Text>
          </Box>
          
        </Stack>
        <Text mt={10} fontSize={25} fontWeight={700} color="orange.500">Your Previous Bookings</Text>
        <SimpleGrid columns={{base:1,md:4}} gap={5} mt={5}>
          {loading?Array(4).fill(0).map(()=> <GridItem>
            <Skeleton noOfLines={3}/>
          </GridItem>):bookings.map((v,i)=> <GridItem key={i}>
              <Card p={3}>
                <Text>Booked on : {new Date(v.date).toLocaleString()}</Text>
                <Flex justifyContent="end">
                  <Link to={`/room/${v.roomID}`}>
                    <Button size="sm" bg="orange.400" color="white" mt={3} _hover={{bg:'orange.500'}}>View Room</Button>
                  </Link>
                </Flex>
              </Card>
            </GridItem>)}
          
        </SimpleGrid>
      </Box>
      <Footer/>
    </Box>
  )
}

export default ProfilePage