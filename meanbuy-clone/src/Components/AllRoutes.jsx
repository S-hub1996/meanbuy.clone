import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
// import Cart from "../Pages/Cart";
// import Prducts from "../Pages/Products";
// import Prduct from "../Pages/Product";
// import Orders from "../Pages/Orders";
// import Login from "../Pages/Login";
// import AuthWrapper from "./AuthWrapper";
import Navbar from "../Components/Navbar"

const Allroutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/products" element={<Prducts/>} />
      <Route path="/products/:id" element={<Prduct/>} />
      <Route path="/cart" element={<AuthWrapper> <Cart/></AuthWrapper>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/login" element={<Login/>} /> */}
    </Routes>
    </>
  );
};

export default Allroutes;
