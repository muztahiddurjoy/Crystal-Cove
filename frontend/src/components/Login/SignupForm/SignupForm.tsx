import { Button, Card, Divider, Flex, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"

const SignupForm = () => {
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const [confirmpassword, setconfirmpassword] = useState<string>('')
    
  return (
    <Card my={5} p={5}>
        <Text fontSize="x-large" fontWeight={700} color="orange.500">Sign-up</Text>
        <Input _focus={{borderColor:'orange.500'}} value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" my={5}/>
        <Input _focus={{borderColor:'orange.500'}} value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" mb={5}/>
        <Input _focus={{borderColor:'orange.500'}} value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} placeholder="Confirm Password" mb={5}/>
        <Button bg="orange.400" color="white" _hover={{bg: "orange.500"}} disabled={true}>Sign-up</Button>
        <Divider my={5}/>
        <Flex justifyContent="center">
        <Text textAlign="center" fontSize="small" mx={2}>Have an Account?</Text>
        <Link to="/login">
        <Text textAlign="center" fontSize="small" color="orange.400">Login</Text>
        </Link>
        </Flex>
    </Card>
  )
}

export default SignupForm