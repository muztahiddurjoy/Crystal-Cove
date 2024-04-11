import { AbsoluteCenter, Box, Button, Flex, Skeleton } from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import React, { Suspense, useState } from "react"
const LoginForm = React.lazy(()=> import('../components/Login/LoginForm/LoginForm'))
const SignupForm = React.lazy(()=> import('../components/Login/SignupForm/SignupForm'))

const LoginPage = () => {
  const [active, setactive] = useState<number>(0)
  return (
    <Box>
      <Navbar/>
        <Box height="100vh">
          <AbsoluteCenter axis="both" flexDirection="column">
            <Flex>
              <Button borderRightRadius={0} variant="outline" w={40} borderColor="orange.400" textColor={active==0?'white':'black'} bg={active==0?'orange.400':'transparent'} onClick={()=> setactive(0)} _hover={{bg:active==0?'orange.500':'orange.100'}}>Login</Button>
              <Button borderLeftRadius={0} variant="outline" w={40} borderColor="orange.400" textColor={active==1?'white':'black'} bg={active==1?'orange.400':'transparent'} onClick={()=> setactive(1)} _hover={{bg:active==1?'orange.500':'orange.100'}}>Signup</Button>
            </Flex>
            
            
            <Suspense fallback={<Skeleton height={400} width={'100%'} mt={5} borderRadius={10}/>}>
              {active==0?<LoginForm/>:<SignupForm/>}
            </Suspense>
          </AbsoluteCenter>
        </Box>
      <Footer/>
    </Box>
  )
}

export default LoginPage