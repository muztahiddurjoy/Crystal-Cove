import { Box, Button, Flex, FormLabel, GridItem, Input, SimpleGrid, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react"


const ContactForm = () => {
    const [isLoading, setisLoading] = useState(false)
    const [response, setresponse] = useState({
        name:'',
        phone:'',
        email:'',
        text:''
    })
    const sendData  = ()=>{

    }
  return (
    <Box p={{base:5,md:10}}>
        <Text textAlign="center" color="orange.500" fontSize={35} fontWeight={700}>Leave a Message</Text>
        <SimpleGrid columns={{base:1,md:3}} gap={3} mt={5}>
            <GridItem>
                <FormLabel color="orange.400">Full Name</FormLabel>
                <Input value={response.name} onChange={(e)=>setresponse({...response,name:e.target.value})} _focus={{borderColor:'orange.500'}} placeholder="John Doe"/>
            </GridItem>
            <GridItem>
                <FormLabel color="orange.400">Phone Number</FormLabel>
                <Input value={response.phone} onChange={(e)=>setresponse({...response,phone:e.target.value})} _focus={{borderColor:'orange.500'}} placeholder="+8801863069707"/>
            </GridItem>
            <GridItem>
                <FormLabel color="orange.400">Email Address</FormLabel>
                <Input value={response.email} onChange={(e)=>setresponse({...response,email:e.target.value})} _focus={{borderColor:'orange.500'}} placeholder="5sD0i@example.com"/>
            </GridItem>
            <GridItem colSpan={{base:1,md:3}}>
                <FormLabel color="orange.400">Text</FormLabel>
                <Textarea rows={5} value={response.text} onChange={(e)=>setresponse({...response,text:e.target.value})} _focus={{borderColor:'orange.500'}} placeholder="Your Message"/>
                <Flex mt={3} justifyContent="flex-end">
                    <Button loadingText="Submitting" isLoading={isLoading} bg="orange.400" color="white" _hover={{bg: "orange.500"}}>Submit</Button>
                </Flex>
            </GridItem>
        </SimpleGrid>
    </Box>
  )
}

export default ContactForm