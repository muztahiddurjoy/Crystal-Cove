import { AbsoluteCenter, Flex, Spinner } from '@chakra-ui/react'

const Preloader = () => {
  return (
    <Flex h="100vh" w="100%" position="fixed" top={0} left={0} bg="white" zIndex={999} right={0} bottom={0}>
        <AbsoluteCenter axis='both'>
            <Spinner color='orange.500'/>
        </AbsoluteCenter>
        
    </Flex>
  )
}

export default Preloader