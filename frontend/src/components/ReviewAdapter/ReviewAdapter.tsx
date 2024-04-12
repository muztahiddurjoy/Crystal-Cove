import { Avatar, Card, Flex, Text } from "@chakra-ui/react"

const ReviewAdapter = () => {
  return (
    <Card p={5}>
        <Text color="gray.500" fontSize="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptatum similique aliquid dicta necessitatibus ullam eveniet eum hic maxime explicabo natus, veniam ducimus officia, architecto laudantium doloremque animi ab nihil?</Text>
        <Flex mt={5} direction="column" alignItems="end">
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov"/>
                <Text color="orange.500" mt={2} fontWeight={700}>Muztahid Rahman</Text>
        </Flex>
    </Card>
  )
}

export default ReviewAdapter