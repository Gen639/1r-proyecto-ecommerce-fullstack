import { useState } from "react";

import "./App.css";
import Register from "./assets/components/Register/Register";
import { UserState } from "./context/user/UserState";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";

import Products from "./assets/components/Products/Products";

function App() {
  return (
    <>
      <UserState>
        <ProductsProvider>
          <Register />
          <Products />
        </ProductsProvider>
      </UserState>
    </>
  );
}

export default App;
