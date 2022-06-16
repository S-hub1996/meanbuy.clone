// import { Image } from '@chakra-ui/react'
import { Center, Text } from '@chakra-ui/react'
import React from 'react'
import Carousel from '../Components/Carousel'

const Home = () => {
  return (
    <>
    <Center gap={2}>

    <Text>Login</Text>
    <Text>signup</Text>
    <Text>products data</Text>
    <Text>product maping</Text>
    <Text>cart</Text>
    <Text>checkout</Text>
    </Center>
    <Carousel/>

    </>
  )
}


export default Home