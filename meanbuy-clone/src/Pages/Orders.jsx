import { Heading,Box,Flex } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../Redux/Products/actions'
import Product  from '../Components/Product'
const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((store) => store.orders)
useEffect(()=>{
     dispatch(fetchOrders())
},[dispatch])
  return (
   <Box>
        <Heading as="h2" size='xl' textAlign='center'>
            Your Orders
        </Heading>
        <Flex flexWrap='wrap' justifyContent='space-around'>
            {orders.map((product) => {
              return <Product
                // key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                // rating={product.rating}
              />;
            })}
          </Flex>
   
   </Box>
  )
}

export default Orders