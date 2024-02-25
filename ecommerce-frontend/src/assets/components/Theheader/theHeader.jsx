import { useNavigate, Link } from "react-router-dom";
import { React, useState, useContext } from "react";
import {
  ProfileOutlined,
  AuditOutlined,
  LoginOutlined,
  AmazonOutlined,
  WindowsOutlined,
  DropboxOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
  ProductOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "../../../App.scss";
import { UserContext } from "../../../context/user/UserState";
import "./theHeader.scss";

const Header = () => {
  let navigate = useNavigate();
  const [current, setCurrent] = useState("home");
  const [navItems, setNavItems] = useState([]);
  const { token, logout } = useContext(UserContext);

  const logoutUser = () => {
    logout();
  };

  const onClick = (e) => {
    setCurrent(e.key);
    switch (e.key) {
      case "home":
        navigate("/");
        break;
      case "login":
        navigate("/login");
        break;
      case "register":
        navigate("/register");
        break;
      case "products":
        navigate("/products");
        break;
      case "profile":
        navigate("/profile");
        break;
      case "cart":
        navigate("/cart");
        break;
      case "logout":
        logoutUser();
        navigate("/");
        break;
    }
  };

  return (
    <nav className="header">
      <div>
        {token ? (
          <>
            <span className="menu-item" onClick={logoutUser}>
              <LogoutOutlined />
              <Link to="/">Logout</Link>
            </span>
            <span className="menu-item">
              <ProductOutlined />
              <Link to="/products">Products</Link>
            </span>
            <span className="menu-item">
              <ShoppingCartOutlined />
              <Link to="/cart">Cart</Link>
            </span>
            <span className="menu-item">
              <UserOutlined />
              <Link to="/profile">Profile</Link>
            </span>
          </>
        ) : (
          <>
            {" "}
            <span className="menu-item">
              <LoginOutlined />
              <Link to="/login">Login</Link>
            </span>
            <span className="menu-item">
              <Link to="/register">Register</Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
