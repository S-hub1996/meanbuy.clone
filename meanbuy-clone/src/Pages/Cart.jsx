import React from "react";
import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Checkout from "../Components/Checkout";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, deleteProductCart } from "../Redux/Products/actions";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const removeProduct = (id) => {
    dispatch(deleteProductCart(id));
  };

  const checkoutHandler = () => {
    dispatch(addOrder(cart));
  };
  return (
    <>
      <Heading
        as={"h2"}
        size={"xl"}
        textAlign={"center"}
        borderBottom="1px solid"
        borderBottomColor="gray.300"
      >
        CART
      </Heading>
      {/* {cart.length &&
        cart.map((product) => {
          return (
            <CartItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              removeProduct={removeProduct}
            />
          );
        })} */}

      {/* <Checkout cart={cart} checkoutHandler={checkoutHandler} /> */}
    </>
  );
};

function CartItem({ title, image, price, description, id, removeProduct }) {
  return (
    <Box
      borderBottom={"1px solid orange"}
      w="fit-content"
      margin="auto"
      mb="2rem"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          h={"300px"}
          w={"300px"}
          pos={"relative"}
          p="0 1rem"
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "80%",
            h: "80%",
            pos: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%,-50%)`,
            backgroundImage: `url(${image})`,
            filter: "blur(5px)",
            zIndex: -1,
          }}
        >
          <Image
            mt={2}
            rounded={"lg"}
            height={260}
            width={260}
            objectFit={"contain"}
            src={image}
          />
        </Box>
        <Box h={"300px"} w={"300px"}>
          <Stack p={4}>
            <Box>
              <Heading as="h3" size="md">
                {title}
              </Heading>
            </Box>

            <Box overflow="hidden" whiteSpace="nowrap">
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontWeight={"300"}
              >
                {description}
              </Text>
            </Box>

            <Text fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Text as="span" color={"gray.600"} fontSize="lg">
                ₹
              </Text>
              {price}
            </Text>
            <Button
              variant={"outline"}
              onClick={() => removeProduct(id)}
              rightIcon={<DeleteIcon />}
            >
              Remove
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Cart;
