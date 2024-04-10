import { Card, Skeleton, SkeletonText } from "@chakra-ui/react"

const RoomAdapterSkeleton = () => {
  return (
    <Card>
        <Skeleton height={250} width="100%"/>
        <SkeletonText my={4} mx={4} noOfLines={5}/>
    </Card>
  )
}

export default RoomAdapterSkeleton