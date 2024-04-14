import { Box, Card, Flex, Link, Text } from "@chakra-ui/react"

const ContactInfo = () => {
  return (
    <Box my={5}>
      <Text textAlign="center" fontSize={35} fontWeight={700} color="orange.500" my={5}>Contact Us</Text>
      <Flex wrap={"wrap"} gap={3} px={{base:3,md:5,lg:10}}>
        <Card p={3} bg="orange.100">
          <Link href="tel:+8801863069707">Phone Number</Link>
        </Card>
      </Flex>
    </Box>
  )
}

export default ContactInfo