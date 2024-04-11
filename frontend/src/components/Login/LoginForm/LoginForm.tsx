import { Button, Card, Input, Text } from "@chakra-ui/react"
import { useState } from "react"

const LoginForm = () => {
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')
  return (
    <Card mt={5} p={5}>
        <Text fontSize="x-large" fontWeight={700} color="orange.500">Login</Text>
        <Input _focus={{borderColor:'orange.500'}} value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" my={5}/>
        <Input _focus={{borderColor:'orange.500'}} value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" mb={5}/>
        <Button bg="orange.400" color="white" _hover={{bg: "orange.500"}} disabled={true}>Login</Button>
    </Card>
  )
}

export default LoginForm