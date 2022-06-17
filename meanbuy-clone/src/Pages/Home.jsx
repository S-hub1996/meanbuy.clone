// import { Image } from '@chakra-ui/react'
import { Heading,Center, Text, GridItem, Grid} from "@chakra-ui/react";
import React from "react";
import Carousel from "../Components/Carousel";
import Products from "../../src/db.json";
import Product from "../Components/Product";
const Home = () => {
  const fastMoving = Products.fastMovingProduct;
  return (
    <>

      <Carousel />
      <hr/>
<Heading p={4}> Fast Moving Products</Heading>
      <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={2}>
        {fastMoving.map((product) => {
          return (
            <>
              <GridItem>
                <Product
                  image={product.image}
                  title={product.name}
                  price={product.price}
                  rating={product?.rating}
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
