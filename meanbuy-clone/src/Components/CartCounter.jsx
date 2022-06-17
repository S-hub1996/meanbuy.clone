import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../Redux/Products/actions";
import prdcts from "../db.json"
const CartCounter = () => {
  const cart = prdcts.cart;


  return (
    <>
    
      <Box
       bg="black"
       textColor="white"
        borderRadius="50%"
         w="20px"
         h='20px'
         textAlign='center'
         pb='25px'
         position='absolute'
         right='-2'
         top='-2'
         >
        {cart?.length ? cart.length : 0}
      </Box>
    </>
  );
};

export default CartCounter;
