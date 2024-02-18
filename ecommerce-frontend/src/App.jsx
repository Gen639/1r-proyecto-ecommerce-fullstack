import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";

import Register from "./assets/components/Register/Register";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";

import { UserProvider } from "./context/user/UserState";
import Products from "./assets/components/Products/Products";
import Profile from "./assets/components/Profile/Profile";

const App = () => {
  return (
    <UserProvider>
      <ProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </UserProvider>
  );
};

export default App;
