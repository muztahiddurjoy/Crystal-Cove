import { Box, Center, Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <Box>
        <Flex wrap={"wrap"} alignItems="center" justifyContent="center" bg="orange.400" p={3} gap={5}>
            <Link to="/room/c2b06275-98e2-4d0a-beac-8f200957431e">
                <Text fontWeight={500} fontSize={14} color="white">Coral Chamber</Text>
            </Link>
            <Link to="/room/78c6f310-55b3-40e5-99a7-12e4af2720fa">
                <Text fontWeight={500} fontSize={14} color="white">Seashell Suite</Text>
            </Link>
            <Link to="/room/6398febb-0f5e-443b-93a7-a51b3f38720c">
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