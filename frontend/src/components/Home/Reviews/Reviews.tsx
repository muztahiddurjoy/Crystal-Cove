import { Box, Card, Flex, GridItem, SimpleGrid, Skeleton, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react"
import ReviewAdapter from "../../ReviewAdapter/ReviewAdapter"

const Reviews = () => {
  return (
    <Box p={{base:5,md:20}}>
      <Text fontSize="x-large" color="orange.500" textAlign="center" fontWeight={700}>What People Think About Us</Text>
      <SimpleGrid mt={5} columns={{base:1,md:4}} gap={5}>
        <GridItem>
          <ReviewAdapter/>
        </GridItem>
        <GridItem>
          <ReviewAdapter/>
        </GridItem>
        <GridItem>
          <Card p={5}>
            <SkeletonText noOfLines={9} />
            <Flex mt={5} direction="column" alignItems="end">
              <SkeletonCircle h={45} w={45}/>
              <Skeleton width={100} height="20px" borderRadius={5} mt={2}/>
            </Flex>
          </Card>
        </GridItem>
      </SimpleGrid>
      
    </Box>
  )
}

export default Reviews