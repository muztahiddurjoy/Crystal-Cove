import { Box, Flex } from "@chakra-ui/react"
import sea from '../../../assets/sea.jpg'
const BookForm = () => {
  return (
    <Flex alignItems="center" justifyContent="center" position="relative" h="60vh" w="100%" overflow="hidden" backgroundImage={sea} backgroundRepeat={'no-repeat'} backgroundSize="cover" backgroundPosition="center">
        <Box position="absolute" h="60vh" w="100vw" bg="black" opacity={0.3}></Box>
    </Flex>
  )
}

export default BookForm