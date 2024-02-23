import { useNavigate } from "react-router-dom";
import { React, useState, useContext, useEffect } from "react";
import {
  ProfileOutlined,
  AuditOutlined,
  LoginOutlined,
  AmazonOutlined,
  WindowsOutlined,
  DropboxOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "../../../App.scss";
import { UserContext } from "../../../context/user/UserState";

const items = [
  {
    label: "Home",
    key: "home",
    icon: <WindowsOutlined />,
  },
  {
    label: "Products",
    key: "products",
    icon: <AmazonOutlined />,
  },
  {
    label: "Cart",
    key: "cart",
    icon: <DropboxOutlined />,
  },
  {
    label: "Profile",
    key: "profile",
    icon: <ProfileOutlined />,
  },
];

const authItems = [
  {
    label: "Login",
    path: "/login",
    icon: <LoginOutlined />,
  },
  {
    label: "Register",
    path: "/register",
    icon: <AuditOutlined />,
  },
];

const Header = () => {
  let navigate = useNavigate();
  const [current, setCurrent] = useState("home");
  const { token } = useContext(UserContext);
  // const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

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
    }
  };

  return (
    <div>
      {token ? (
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        >
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      ) : (
        <Menu
          onClick={(e) => onClick(e.key)}
          selectedKeys={[current]}
          mode="horizontal"
        >
          {authItems.map((item) => (
            <Menu.Item key={item.path} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      )}
    </div>
  );
};

export default Header;
