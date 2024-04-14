import { Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import ContactInfo from "../components/Contact/ContactInfo/ContactInfo"
import ContactForm from "../components/Contact/ContactForm/ContactForm"

const ContactPage = () => {
  return (
    <Box>
        <Navbar/>
        <Box my={10}>
            <ContactInfo/>
            <ContactForm/>
        </Box>
        <Footer/>
    </Box>
  )
}

export default ContactPage