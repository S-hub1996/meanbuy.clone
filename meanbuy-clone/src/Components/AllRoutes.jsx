import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Products from "../Pages/Products";
import Product from "../Components/Product";
import Orders from "../Pages/Orders";
import Login from "../Pages/Login";
// import AuthWrapper from "./AuthWrapper";
import Navbar from "../Components/Navbar"
import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Signup from "../Pages/Signup";
import Watches from "../Pages/Watches";

const Allroutes = () => {
  return (
    <Box mr={[0,0,0,0,0,40]} ml={[0,0,0,0,0,40]}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<Product/>} />
      <Route path="/watches" element={<Watches/>} />
      <Route path="/cart" element={ <Cart/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    <Footer/>
    </Box>
  );
};

export default Allroutes;
