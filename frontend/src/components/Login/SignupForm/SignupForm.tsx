import { Button, Card, Divider, Flex, Input, Text, useToast } from "@chakra-ui/react"
import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { apiurl } from "../../../apiurl"
import { userContext } from "../../UserWrapper"

const SignupForm = () => {
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const [confirmpassword, setconfirmpassword] = useState<string>('')
    const {setUser} = useContext(userContext)
    const router = useNavigate()
    const toast = useToast()
    const signUpUser = ()=>{
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
      else if(!confirmpassword){
          toast({
            title: 'Enter Password',
            description: "Please confirm your password",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
      }
      else if(password!==confirmpassword){
        toast({
          title: 'Password Mismatch',
          description: "Please confirm your password",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
      else{
        axios.post(`${apiurl}/signup`,{
          email,
          password
        }).then((res)=>{
          if(res.status==201){            
            toast({
              title: 'Signed Up',
              description: "You have successfully signed up",
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
    <Card my={5} p={5}>
        <Text fontSize="x-large" fontWeight={700} color="orange.500">Sign-up</Text>
        <Input _focus={{borderColor:'orange.500'}} value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" my={5}/>
        <Input _focus={{borderColor:'orange.500'}} type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" mb={5}/>
        <Input _focus={{borderColor:'orange.500'}} type="password" value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} placeholder="Confirm Password" mb={5}/>
        <Button onClick={signUpUser} bg="orange.400" color="white" _hover={{bg: "orange.500"}} disabled={true}>Sign-up</Button>
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