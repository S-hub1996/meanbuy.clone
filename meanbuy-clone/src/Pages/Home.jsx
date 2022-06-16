// import { Image } from '@chakra-ui/react'
import { Center, Text, Box, GridItem, Grid, Flex } from "@chakra-ui/react";
import React from "react";
import Carousel from "../Components/Carousel";
import Products from "../../src/db.json";
import Product from "../Components/Product";
const Home = () => {
  const fastMoving = Products.fastMovingProduct;
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
      <Carousel />

      <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={2}>
        {fastMoving.map((product) => {
          return (
            <>
              <GridItem>
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
    </>
  );
};

export default Home;
