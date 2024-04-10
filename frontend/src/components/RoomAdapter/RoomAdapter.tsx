import { AspectRatio, Box, Button, Card, CardBody, CardFooter, Center, Divider, Flex, Image, Skeleton, Spacer, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const RoomAdapter = ({baths,beds,charge,description,image,name,slug}:RoomCard) => {
  return (
    <Card>
        <AspectRatio w="100%" ratio={4/3}>
            <Image src={image} alt={name} fallback={<Skeleton height={200} width={200}/>} roundedTop={5} objectFit="cover"/>
        </AspectRatio>
        <CardBody p={3}>
            <Text fontWeight={700} fontSize="2xl" textColor="orange.400">{name}</Text>
            <Text fontSize="small" textColor="gray.500">{description}</Text>
            <Flex alignItems="end" justifyContent="end">
                <Text textAlign="right" fontSize="2xl" fontWeight={700} textColor="orange.400">{charge}</Text>
                <Text fontSize="small" ml={1} mb={1}>/night</Text>
            </Flex>
        </CardBody>
        <Divider color="gray.400"/>
            <CardFooter>
            <Flex justifyContent="start" alignItems="center" gap={2}>
                <Flex textColor="orange.400" alignItems="center" border="1px" borderColor="gray.200" borderRadius={5} p={1}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/></svg>
                     <Text ml={2} fontSize="md" fontWeight={700}>{beds}</Text>
                </Flex>
                <Flex textColor="orange.400" alignItems="center" border="1px" borderColor="gray.200" borderRadius={5} p={1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" x2="8" y1="5" y2="7"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="7" x2="7" y1="19" y2="21"/><line x1="17" x2="17" y1="19" y2="21"/></svg>
                     <Text ml={2} fontSize="md" fontWeight={700}>{baths}</Text>
                </Flex>
                
            </Flex>
            <Spacer/>
            <Flex justifyContent="start" alignItems="center">
                <Button bg="orange.400" textColor="white" _hover={{bg: "orange.500"}}>Book</Button>
                <Link to={`/room/${slug}`}>
                    <Button variant="outline" textColor="orange.500" borderColor="orange.500" ml={2}>More</Button>
                </Link>
            </Flex>
                
            </CardFooter>
    </Card>
  )
}

export default RoomAdapter