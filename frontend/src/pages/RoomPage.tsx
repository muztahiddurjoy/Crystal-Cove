import { AspectRatio, Badge, Box, Button, Circle, Flex, GridItem, Image, SimpleGrid, Skeleton, SkeletonText, Text } from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { useEffect, useState } from "react"
import axios from "axios"
import { apiurl } from "../apiurl"
import {  useParams } from "react-router-dom"
const RoomPage = () => {
  const {id} = useParams()
  const [details, setdetails] = useState({
    name: '',
    bath:0,
    beds:0,
    price: 0,
    availableToday:false,
    desc:'',
    image:''
  })

  useEffect(() => {
    axios.get(`${apiurl}/rooms/${id}`).then((res)=>{
      setdetails(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <Box>
      <Navbar/>
      <SimpleGrid my={10} px={{base:3,md:20}} column={{base:1,md:2}} gap={{base:5,md:10}}>
        <GridItem>
          <AspectRatio ratio={4/3}>
            <Image borderRadius={10} src={details.image} fallback={<Skeleton height={200} width={200} borderRadius={10}/>}/>
          </AspectRatio>
        </GridItem>
        <GridItem>
          <Flex direction="column" alignItems="end">
            {details.name?<Flex direction="column" alignItems="end">
              <Text fontSize="xx-large" fontWeight={700} color="orange.500">{details.name}</Text>
              <Flex justifyContent="start" alignItems="center" gap={2} my={5}>
                <Flex textColor="orange.400" alignItems="center" border="1px" borderColor="gray.200" borderRadius={5} p={1}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/></svg>
                     <Text ml={2} fontSize="md" fontWeight={700}>{details.beds}</Text>
                </Flex>
                <Flex textColor="orange.400" alignItems="center" border="1px" borderColor="gray.200" borderRadius={5} p={1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" x2="8" y1="5" y2="7"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="7" x2="7" y1="19" y2="21"/><line x1="17" x2="17" y1="19" y2="21"/></svg>
                     <Text ml={2} fontSize="md" fontWeight={700}>{details.bath}</Text>
                </Flex>
                
            </Flex>
            <Text color="orange.500" fontWeight={700} fontSize={30}>{details.price} <span style={{color:'gray',fontSize:15,fontWeight:400}}>/night</span></Text>
            <Badge mt={5} display="flex" alignItems="center" gap={2} p={2} bg={details.availableToday?"green.100":"red.100"} borderRadius={5}><Circle bg={details.availableToday?"green.500":"red.500"} size={3}/> {details.availableToday?"Available Today":"Unavailable Today"}</Badge>
            <Button bg="orange.400" _hover={{bg:'orange.500'}} color="#fff" mt={3}>Book</Button>
            </Flex>:<Flex direction="column" alignItems="end">
                <Skeleton height={30} width={300} borderRadius={10}/>
                <Skeleton height={5} width={200} mt={7} borderRadius={10}/>
                <Skeleton height={5} width={100} mt={7} borderRadius={10}/>
              </Flex>}
          
          </Flex>
        </GridItem>
        <GridItem colSpan={{base:1,md:2}}>
        {details.desc?<Text fontSize="small" color="gray.500">{details.desc}</Text>:<SkeletonText noOfLines={5} height="100%" width="100%"/>}
        </GridItem>
      </SimpleGrid>
      <Footer/>
    </Box>
  )
}

export default RoomPage