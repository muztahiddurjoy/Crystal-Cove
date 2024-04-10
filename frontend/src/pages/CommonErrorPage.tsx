import { Button, Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import journey from '../assets/journey.png'
const CommonErrorPage = () => {
  return (
    <Flex h="100vh" w="100%" alignItems="center" justifyContent="center" flexDir="column" p={5}>
        <img src={journey} alt="Journey" height={300} width={300}/>
        <Text fontSize="4xl" textColor="orange.500" textAlign="center" fontWeight={700}>Something Went Wrong</Text>
        <Text fontSize="smaller" textColor="gray.600" mt={5} textAlign="center">Maybe this page doesn't exist anymore or an error occured</Text>
        <Link to="/">
            <Button bg="orange.400" textColor='#fff' _hover={{bg: "orange.500"}} mt={2} pb={1}>Home</Button>
        </Link>
    </Flex>
  )
}

export default CommonErrorPage