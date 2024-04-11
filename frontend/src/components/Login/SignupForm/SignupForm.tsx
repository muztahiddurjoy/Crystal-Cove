import { Button, Card, Input, Text } from "@chakra-ui/react"
import { useState } from "react"

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
    </Card>
  )
}

export default SignupForm