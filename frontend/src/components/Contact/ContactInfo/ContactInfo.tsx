import { Box, Card, Flex, Link, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { apiurl } from "../../../apiurl"

const ContactInfo = () => {
  const [info, setinfo] = useState<Array<{name:string,url:string,id:number}>>([])
  
  useEffect(() => {
    axios.get(`${apiurl}/info`).then((res)=>{
      if(res.status==200){
        setinfo(res.data)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  
  return (
    <Box my={5}>
      <Text textAlign="center" fontSize={35} fontWeight={700} color="orange.500" my={5}>Contact Us</Text>
      <Flex wrap={"wrap"} gap={3} px={{base:3,md:5,lg:10}}>
        {info.map((v)=> <Card p={3} bg="orange.100" key={v.id}>
          <Link href={v.url}>{v.name}</Link>
        </Card>)}
        
      </Flex>
    </Box>
  )
}

export default ContactInfo