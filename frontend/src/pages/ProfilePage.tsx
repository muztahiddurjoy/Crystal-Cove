import { Avatar, Box, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import RoomAdapterSkeleton from "../components/RoomAdapter/RoomAdapterSkeleton"

const ProfilePage = () => {
  
  return (
    <Box>
      <Navbar/>
      <Box minH="100vh" p={{base:3,md:10}}>
        <Stack direction={{base:'column',md:'row'}} gap={5} justify={{base:'center',md:'start'}} align={{base:'start',md:'center'}}>
          {/* <Avatar size="2xl"/> */}
          <Box>
            <Text fontSize={25} fontWeight={700} color="orange.500">Muztahid Rahman</Text>
            <Text color="gray.600">muztahiddurjoy99@gmail.com</Text>
            <Text color="gray.600">Joined : </Text>
          </Box>
          
        </Stack>
        <Text mt={10} fontSize={25} fontWeight={700} color="orange.500">Your Previous Bookings</Text>
        <SimpleGrid columns={{base:1,md:4}} gap={5} mt={5}>
          <GridItem>
            <RoomAdapterSkeleton/>
          </GridItem>
          <GridItem>
            <RoomAdapterSkeleton/>
          </GridItem>
          <GridItem>
            <RoomAdapterSkeleton/>
          </GridItem>
          <GridItem>
            <RoomAdapterSkeleton/>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Footer/>
    </Box>
  )
}

export default ProfilePage