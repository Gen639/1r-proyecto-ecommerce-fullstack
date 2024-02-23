import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./assets/components/Home/home";
import Login from "./assets/components/Login/login";
import TheHeader from "./assets/components/Theheader/theHeader"

import Register from "./assets/components/Register/Register";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";

import { UserProvider } from "./context/user/UserState";
import Products from "./assets/components/Products/Products";
import Profile from "./assets/components/Profile/Profile";
import Cart from "./assets/components/Cart/cart";
import { OrdersProvider } from "./context/OrderContext/orderState";
import Footer from "./assets/components/Footer/Footer";

const App = () => {
  return (
    <UserProvider>
      <ProductsProvider>
        <OrdersProvider>
          <BrowserRouter>
            <div className="container">
              <TheHeader/>
                <div className='options'>
                  <div className="page-content">
              <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </div>
            </div>
            <Footer />
          </BrowserRouter>
        </OrdersProvider>
      </ProductsProvider>
    </UserProvider>
  );
};

export default App;


