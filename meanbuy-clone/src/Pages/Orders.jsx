import { Heading,Box,Text,Grid,GridItem,Button,Center } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import prdcts from '../db.json'
import Product  from '../Components/Product'
import { useState } from 'react'
import {Link as RouteLink} from "react-router-dom"
import { useToast } from '@chakra-ui/react'
const Orders = () => {
  const [orders,setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || [])
  const [total,setTotal]= useState(29990)

  const toast = useToast()

  return (
   <Box>
        <Heading as="h2" size='xl' textAlign='center'>
            Your Orders
        </Heading>
<Center>


        <Text as='h3' fontWeight={'semibold'}>Bill amount:- {total} </Text>
</Center>

          <Grid m={2} templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)']} gap={1}>
        {orders.map((product) => {
          return (
            <>
              <GridItem w={'100px'}>
                <Product
                  image={product.image}
                  title={product.name}
                  price={product.price}
                  rating={product.rating}
                  para={product.para}
                  />
              </GridItem>
            </>
          );
        })}
      </Grid>
      <Center gap={2}>
      <Button bg={'green.400'} >Pay Online</Button>
      <RouteLink to={"/"}>

      <Button bg={'orange.300'}  onClick={() =>
        toast({
          title: 'Order Placed.',
          description: "Ready to dispatch.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })}>  Cash On Delivery</Button>
      </RouteLink>
   
        </Center>
   </Box>
  )
}

export default Orders