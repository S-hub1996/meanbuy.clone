import React from 'react'
import { Box, Flex, Image,Grid,GridItem } from '@chakra-ui/react'
// import {SingleProduct} from './SingleProduct'
import prdcts from "../../src/db.json";
import Product from "../Components/Product";
const Products = () => {
  const newArrivals = prdcts.newArrivals;
  return (
<>
<Flex mt={2} justifyContent={'center'}>
<Image src='https://www.meanbuy.com/assets/img/india/smpost.jpg'/>
</Flex>

<Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={2}>
        {newArrivals.map((product) => {
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
  )
}

export default Products