import { Box, Card, Flex, GridItem, SimpleGrid, Skeleton, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react"
import ReviewAdapter from "../../ReviewAdapter/ReviewAdapter"
import { useEffect, useState } from "react"
import axios from "axios"
import { apiurl } from "../../../apiurl"

const Reviews = () => {
  const [reviews, setreviews] = useState<Array<Review>>([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setloading(true)
    axios.get(`${apiurl}/review`).then((res)=>{
      setreviews(res.data)
      setloading(false)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  
  return (
    <Box p={{base:5,md:20}}>
      <Text fontSize="x-large" color="orange.500" textAlign="center" fontWeight={700}>What People Think About Us</Text>
      <SimpleGrid mt={5} columns={{base:1,md:3}} gap={5}>
        {loading?Array(6).fill(0).map(()=><GridItem>
            <Card p={5}>
              <SkeletonText noOfLines={9} />
              <Flex mt={5} direction="column" alignItems="end">
                <SkeletonCircle h={45} w={45}/>
                <Skeleton width={100} height="20px" borderRadius={5} mt={2}/>
              </Flex>
            </Card>
          </GridItem>):reviews.map((review:Review)=>{
            return <GridItem>
              <ReviewAdapter {...review} key={review.id}/>
            </GridItem>
          })}
      </SimpleGrid>
      
    </Box>
  )
}

export default Reviews