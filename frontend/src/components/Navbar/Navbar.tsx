import { Avatar, Button, Flex, Spacer } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [user, setuser] = useState<User>()
  return (
    <Flex p={3} bg="orange.400" alignItems="center">
      <Link to="/">
        <Button variant="ghost" color="white" _hover={{bg:"rgba(255,255,255,0.2)"}}>Crystal Cove</Button>
      </Link>
        <Spacer/>
        {user?<Link to={`/user/${user.uid}`}><Avatar size="sm"/></Link>:<Link to="/login">
            <Button size="sm" _hover={{bg:"orange.100", color:"orange.500"}} color="white" variant="outline">Login</Button>
        </Link>}
    </Flex>
  )
}

export default Navbar