import { Button, Flex, Spacer, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <Flex p={3} bg="orange.400" alignItems="center">
      <Link to="/">
        <Button variant="ghost" color="white" _hover={{bg:"rgba(255,255,255,0.2)"}}>Crystal Cove</Button>
      </Link>
        <Spacer/>
        <Link to="/join">
            <Button size="sm" _hover={{bg:"orange.100", color:"orange.500"}} color="white" variant="outline">Login</Button>
        </Link>
    </Flex>
  )
}

export default Navbar