import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";
import { NavLogIn } from "../graphic- interface/components/NavLogIn";
import { Welcome } from "../pages/Welcome";
import { Login } from "../auth/pages/Login";
import { Register } from "../auth/pages/Register";
import { Carousel } from "../graphic- interface/components/Carousel";
import { Footer } from "../graphic- interface/components/Footer";
import { Products } from "../pages/Products";
import { ProductProvider } from "../context/ProductContext";
import { ShoppingCart } from "../pages/ShoppingCart";
import { SingleProduct } from "../pages/SingleProduct";

export const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          <NavLogIn />
          <Carousel />
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<SingleProduct />} />
            <Route path="/shopping" element={<ShoppingCart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  );
};
