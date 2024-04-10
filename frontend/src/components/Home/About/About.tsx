import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react"
import book from '../../../assets/book.png'
const AboutContainer = () => {
  return (
    <Flex p={{base: 5, md: 10}} flexDir={{base: 'column', md: 'row'}} >
        <Box flex={1} display="flex" alignItems="center" justifyContent="center">
            <Image src={book} alt="booking" fallback={<Skeleton height={300} width={300} rounded={10}/>} height={300} width={300}/>
        </Box>
        <Box flex={1}>
            <Text fontSize={{base:'3xl',md:'3xl'}} fontWeight={'bold'} color="orange.400" textAlign={{base:'center',md:'right'}}>About Crystal Cove</Text>
            <Text fontSize="smaller" color="gray.600" textAlign={{base:'center',md:'right'}} mt={5}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit, repellendus qui velit alias amet culpa nisi quisquam architecto quae eligendi molestias veritatis laborum soluta reiciendis dicta inventore temporibus perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel adipisci ipsam quam. Fugit, repellendus veniam odit obcaecati qui illo dolores debitis nulla pariatur? Voluptatem id et consequuntur consectetur, a impedit.</Text>
        </Box>
    </Flex>
  )
}

export default AboutContainer