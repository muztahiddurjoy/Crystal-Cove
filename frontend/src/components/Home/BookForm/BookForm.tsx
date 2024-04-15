import { Box, Button, Card, Flex, FormLabel, Input, Stack, Text } from "@chakra-ui/react"
import sea from '../../../assets/sea.jpg'
import { useState } from "react";
import { Link } from "react-router-dom";
const BookForm = () => {
  //const days:Array<string> = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [queries, setqueries] = useState({
    beds:0,
    baths:0,
    // day:days[new Date().getDay()]
  })

  return (
    <Flex alignItems="center" justifyContent="center" position="relative" h="60vh" w="100%" overflow="hidden" backgroundImage={sea} backgroundRepeat={'no-repeat'} backgroundSize="cover" backgroundPosition="center">
        <Box position="absolute" h="60vh" w="100vw" bg="black" opacity={0.3}></Box>
        <Card p={5}>
          <Text fontSize={25} fontWeight={700} color="orange.500">Find Your Room</Text>
          <Stack mt={3} direction={{base:"column",md:"row"}} align="end">
            <Box>
              <FormLabel>Beds</FormLabel>
              <Input value={queries.beds} onChange={(e)=> setqueries((prev) => { return {...prev,beds:Number(e.target.value)}})} borderColor="gray.400" type="number" min={0} max={5} w={200} _hover={{borderColor:"gray.500"}} _focus={{borderColor:"orange.400"}}/>
            </Box>
            <Box>
              <FormLabel>Baths</FormLabel>
              <Input value={queries.baths} onChange={(e)=> setqueries((prev) => { return {...prev,baths:Number(e.target.value)}})} borderColor="gray.400" type="number" min={0} max={5} w={200} _hover={{borderColor:"gray.500"}} _focus={{borderColor:"orange.400"}}/>
            </Box>
            {/* <Box w={{base:'100%',md:'auto'}}>
              <FormLabel>Day (This Week)</FormLabel>
              <Select value={queries.day} onChange={(e)=> setqueries((prev) => { return {...prev,day:e.target.value}})} borderColor="gray.400" _hover={{borderColor:"gray.500"}} _focus={{borderColor:"orange.400"}} placeholder={days[new Date().getDay()]}>
                {days.map((v,i)=> <option key={i}>{v}</option>)}
              </Select>
            </Box> */}
            <Link to={`/search?beds=${queries.beds}&baths=${queries.baths}`}>
              <Button mt={{base:3,md:0}} bg="orange.400" _hover={{bg:"orange.500"}} color="white">
                Search
              </Button>
            </Link>
          </Stack>
        </Card>
    </Flex>
  )
}

export default BookForm