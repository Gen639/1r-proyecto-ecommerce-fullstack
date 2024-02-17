import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./components/Home";
import Home from "./components/home";
import Login from "./components/login";
// import Profile from "./components/profile";
// import TheHeader from "./components/TheHeader";

import { AuthContext, AuthProvider } from "./context/context";
import { UserProvider } from './context/user/UserState';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
