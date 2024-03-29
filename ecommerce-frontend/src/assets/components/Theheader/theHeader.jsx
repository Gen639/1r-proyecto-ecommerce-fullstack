import { useNavigate, Link } from "react-router-dom";
import { React, useState, useContext, useEffect } from "react";
import {
  ProfileOutlined,
  AuditOutlined,
  LoginOutlined,
  AmazonOutlined,
  WindowsOutlined,
  DropboxOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { UserContext } from "../../../context/UserContext/UserState";
import CustomMenu from "./CustomMenu";
import './theHeader.scss'

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
  {
    label: "Logout",
    key: "logout",
    icon: <ProfileOutlined />,
  },
];

const authItems = [
  {
    label: "Login",
    key: "login",
    path: "/login",
    icon: <LoginOutlined />,
  },
  {
    label: "Register",
    key: "register",
    icon: <AuditOutlined />,
  },
];

const Header = () => {
  let navigate = useNavigate();
  const [current, setCurrent] = useState("home");
  const [navItems, setNavItems] = useState([]);
  const { token, logout } = useContext(UserContext);

  const logoutUser = () => {
    logout();
  };
  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
    setNavItems([
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
      {
        label: "Logout",
        key: "logout",
        icon: <LogoutOutlined />,
      },
    ]);
    console.log(navItems);
  }, [token]);

  useEffect(() => {
    if (!token) {
      setNavItems([
        {
          label: "Login",
          key: "login",
          icon: <LoginOutlined />,
        },
        {
          label: "Register",
          key: "register",
          icon: <AuditOutlined />,
        },
      ]);
      console.log(navItems);
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
      case "logout":
        logoutUser();
        navigate("/");
        break;
    }
  };

  return (
    <div className="menu">
      <CustomMenu
        onClick={onClick}
        selectedKeys={[current]}
        items={items}
        authItems={authItems}
        navItems={navItems}
      />
    </div>
  );
};

export default Header;
