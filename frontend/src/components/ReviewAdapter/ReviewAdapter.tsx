import { Avatar, Card, Flex, Text } from "@chakra-ui/react"

const ReviewAdapter = ({image,name,text}:Review) => {
  return (
    <Card p={5}>
        <Text color="gray.500" fontSize="small">{text}</Text>
        <Flex mt={5} direction="column" alignItems="end">
                <Avatar name={name} src={image}/>
                <Text color="orange.500" mt={2} fontWeight={700}>{name}</Text>
        </Flex>
    </Card>
  )
}

export default ReviewAdapter