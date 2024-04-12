import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/react"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import RoomAdapterSkeleton from "../components/RoomAdapter/RoomAdapterSkeleton"

const SearchPage = () => {
  return (
    <Box>
      <Navbar/>
      <Box my={10} p={{base:3,md:10}}>
        <Text fontSize={30} fontWeight={700} color="orange.500">Search Results</Text>
        <SimpleGrid mt={5} columns={{base:1,md:4}} gap={5}>
          <GridItem>
            <RoomAdapterSkeleton/>
          </GridItem>
          <GridItem>
            <RoomAdapterSkeleton/>
          </GridItem>
          <GridItem>
            <RoomAdapterSkeleton/>
          </GridItem>
          
        </SimpleGrid>
      </Box>
      <Footer/>
    </Box>
  )
}

export default SearchPage