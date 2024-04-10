import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import RoomAdapter from "../../RoomAdapter/RoomAdapter"
import room1 from '../../../assets/rooms/1.jpg'
import room2 from '../../../assets/rooms/2.jpg'
import room3 from '../../../assets/rooms/3.jpg'
import RoomAdapterSkeleton from "../../RoomAdapter/RoomAdapterSkeleton"
const Rooms = () => {
  return (
    <Box p={{base:5,md:10}}>
      <Text textAlign="center" fontSize='3xl' fontWeight={700} color="orange.400">Our Rooms</Text>
      <Grid mt={5} templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap={5} px={{base: 5, md: 20}}>
        <GridItem>
          <RoomAdapter baths={3} beds={1} charge={1000} description="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus accusamus sapiente alias blanditiis vel sit rem nemo numquam? Culpa fugiat quo error nobis tempore. Provident excepturi ex suscipit sapiente eligendi." image={room1} name="Coral Chamber" slug="random" key={1}/>
          <RoomAdapterSkeleton/>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Rooms