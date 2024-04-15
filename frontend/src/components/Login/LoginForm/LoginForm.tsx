import { Button, Card, Divider, Flex, Input, Text, useToast } from "@chakra-ui/react"
import axios from "axios"
import { useContext, useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import { apiurl } from "../../../apiurl"
import { userContext } from "../../UserWrapper"

const LoginForm = () => {
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const toast = useToast()
    const router = useNavigate()
    const {setUser} = useContext(userContext)
    const loginUser = ()=>{
      if(!email){
          toast({
            title: 'Enter Email',
            description: "Please enter your email address",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
      }
      else if(!password){
          toast({
            title: 'Enter Password',
            description: "Please enter your password",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
      }
      else{
        axios.post(`${apiurl}/login`,{
          email,
          password
        }).then((res)=>{
          if(res.status==200){            
            toast({
              title: 'Logged In',
              description: "You have successfully logged in",
              status: 'success',
              duration: 3000,
              isClosable: true,
            })
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('uid',res.data.uid)
            setUser({
              email:email,
              uid:res.data.uid
            })
            setTimeout(() => {
              router(-1)
            }, 2000);
          }
        }).catch((err)=>{
          toast({
            title: 'Error',
            description: err.error,
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        })
      }
    }

  return (
    <Card mt={5} p={5}>
        <Text fontSize="x-large" fontWeight={700} color="orange.500">Login</Text>
        <Input _focus={{borderColor:'orange.500'}} value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" my={5}/>
        <Input _focus={{borderColor:'orange.500'}} value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" mb={5}/>
        <Button bg="orange.400" color="white" _hover={{bg: "orange.500"}} disabled={true} onClick={loginUser}>Login</Button>
        <Divider my={5}/>
        <Flex justifyContent="center">
        <Text textAlign="center" fontSize="small" mx={2}>New Here?</Text>
        <Link to="/signup">
        <Text textAlign="center" fontSize="small" color="orange.400">Signup</Text>
        </Link>
        </Flex>
    </Card>
  )
}

export default LoginForm