import { Button, Flex, Spacer, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <Flex p={3} bg="orange.400" alignItems="center">
        <Text color="white" fontWeight={700}>Crystal Cove</Text>
        <Spacer/>
        <Link to="/join">
            <Button size="sm" _hover={{bg:"orange.100", color:"orange.500"}} color="white" variant="outline">Login</Button>
        </Link>
    </Flex>
  )
}

export default Navbar