import { Avatar, Button, Flex, Spacer } from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { userContext } from "../UserWrapper"

const Navbar = () => {
  const {user} = useContext(userContext)
  return (
    <Flex p={3} bg="orange.400" alignItems="center" gap={2}>
      <Link to="/">
        <Button variant="ghost" color="white" _hover={{bg:"rgba(255,255,255,0.2)"}}>Crystal Cove</Button>
      </Link>
        <Spacer/>
        <Link to="/">
        <Button size="sm" variant="ghost" color="white" _hover={{bg:"rgba(255,255,255,0.2)"}}>Home</Button>
        </Link>
        <Link to="/contact">
        <Button  size="sm" variant="ghost" color="white" _hover={{bg:"rgba(255,255,255,0.2)"}}>Contact</Button>
        </Link>
        {user?<Link to={`/user/${user.uid}`}><Avatar size="sm"/></Link>:<Link to="/login">
            <Button size="sm" _hover={{bg:"orange.100", color:"orange.500"}} color="white" variant="outline">Login</Button>
        </Link>}
    </Flex>
  )
}

export default Navbar