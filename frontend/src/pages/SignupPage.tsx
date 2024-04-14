import { AbsoluteCenter, Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import SignupForm from "../components/Login/SignupForm/SignupForm"

const SignupPage = () => {
  return (
    <Box>
        <Navbar/>
        <Box height="100vh">
          <AbsoluteCenter axis="both" flexDirection="column">
            <SignupForm/>
          </AbsoluteCenter>
        </Box>
        <Footer/>
    </Box>
  )
}

export default SignupPage