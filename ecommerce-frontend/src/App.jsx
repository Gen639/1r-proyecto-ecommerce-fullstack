import { useState } from "react";

import "./App.css";
import Register from "./assets/components/Register/Register";
import { UserState } from "./context/user/UserState";

function App() {
  return (
    <>
      <UserState>
        <Register />
      </UserState>
    </>
  );
}

export default App;
