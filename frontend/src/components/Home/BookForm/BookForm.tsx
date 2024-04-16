import { Box, Button, Card, Flex, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Text } from "@chakra-ui/react"
import sea from '../../../assets/sea.jpg'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const BookForm = () => {
  const [queries, setqueries] = useState({
    beds:1,
    baths:1,
  })

  useEffect(() => {
    console.log(queries)
  }, [queries])
  

  return (
    <Flex alignItems="center" justifyContent="center" position="relative" h="60vh" w="100%" overflow="hidden" backgroundImage={sea} backgroundRepeat={'no-repeat'} backgroundSize="cover" backgroundPosition="center">
        <Box position="absolute" h="60vh" w="100vw" bg="black" opacity={0.3}></Box>
        <Card p={5}>
          <Text fontSize={25} fontWeight={700} color="orange.500">Find Your Room</Text>
          <Stack mt={3} direction={{base:"column",md:"row"}} align="end">
            <Box>
              <FormLabel>Beds</FormLabel>
              <NumberInput  defaultValue={1} min={1} max={3} value={queries.beds} onChange={(e)=> setqueries((prev) => { return {...prev,beds:Number(e)}})}>
  <NumberInputField  borderColor="gray.400" type="number" min={0} max={5} w={300} _hover={{borderColor:"gray.500"}} _focus={{borderColor:"orange.400"}} />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
              
            </Box>
            <Box>
              <FormLabel>Baths</FormLabel>
              <NumberInput  defaultValue={1} min={1} max={3} value={queries.baths} onChange={(e)=> setqueries((prev) => { return {...prev,baths:Number(e)}})}>
  <NumberInputField  borderColor="gray.400" type="number" min={0} max={5} w={300} _hover={{borderColor:"gray.500"}} _focus={{borderColor:"orange.400"}} />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
            </Box>
           
            <Link to={`/search?beds=${queries.beds}&baths=${queries.baths}`}>
              <Button isDisabled={(queries.beds<1||queries.baths<1)||queries.beds>3||queries.baths>3} mt={{base:3,md:0}} bg="orange.400" _hover={{bg:"orange.500"}} color="white">
                Search
              </Button>
            </Link>
          </Stack>
        </Card>
    </Flex>
  )
}

export default BookForm