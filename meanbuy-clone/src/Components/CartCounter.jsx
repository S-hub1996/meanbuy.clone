import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../Redux/Products/actions";

const CartCounter = () => {
  const cart = useSelector((store) => store.ecommerceData.cart);

  const dispatch= useDispatch();
  useEffect(()=>{
    if(cart?.length===0){
      dispatch(fetchCart());
    }
  },[cart?.length,dispatch])
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
