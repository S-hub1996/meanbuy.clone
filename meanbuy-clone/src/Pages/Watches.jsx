import React, { useState } from "react";
import {
  Grid,
  GridItem,
  Heading,
  Center,
  Select,
} from "@chakra-ui/react";
import prdcts from "../../src/db.json";
import Product from "../Components/Product";
const Watches = () => {
  const [high, setHigh] = useState(false);
  const [low, setLow] = useState(false);
  const [rate, setRate] = useState(false);

  const mensWatches = prdcts.mensWatches;
  const handleSort = (e) => {
    if (e.target.value === "High to Low") {
      mensWatches.sort((a, b) => {
        return b.price - a.price;
      });
      setHigh(true);
      //  sorted_data(dispatch,sdata)
    } else if (e.target.value === "Low to High") {
     mensWatches.sort((a, b) => {
        return a.price - b.price;
      });
      // sorted_data(dispatch,sdata)
      setLow(true);
      setHigh(false);

    } else if (e.target.value === "Top Rated") {
      mensWatches.sort((a, b) => {
        return b.rating - a.rating;
      });
      // sorted_data(dispatch,sdata)
      setHigh(false);
      setLow(false);
      setRate(true);
      
    }
  };

  return (
    <>
      <Center>
        <Heading p={4}>Men's Watches</Heading>
      </Center>

      <Select
        placeholder="Filter Options"
        onClick={handleSort}
        bg={"orange"}
        ml={"80%"}
        w={"15%"}
      >
        <option value="High to Low">High to Low</option>
        <option value="Low to High">Low to High</option>
        <option value="Top Rated">Top Rated</option>
      </Select>

      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={2}
      >
        {mensWatches.map((product) => {
          return (
            <>
              <GridItem>
                <Product
                  key={product.id}
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

export default Watches;
