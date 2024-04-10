import { Box, Center, Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <Box>
        <Flex wrap={"wrap"} alignItems="center" justifyContent="center" bg="orange.400" p={3} gap={5}>
            <Link to="/room/coral-chamber">
                <Text fontWeight={500} fontSize={14} color="white">Coral Chamber</Text>
            </Link>
            <Link to="/room/seashell-suite">
                <Text fontWeight={500} fontSize={14} color="white">Seashell Suite</Text>
            </Link>
            <Link to="/room/harbor-haven">
                <Text fontWeight={500} fontSize={14} color="white">Harbor Haven</Text>
            </Link>
        </Flex>
        <Center bg="orange.500" p={2}>
            <Text fontSize={12} color="white">Copyright © {new Date().getFullYear()}. All rights reserved.</Text>
        </Center>
    </Box>
  )
}

export default Footer