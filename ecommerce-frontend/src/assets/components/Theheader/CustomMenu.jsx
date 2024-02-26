import React, { useContext } from "react";
import { Menu } from "antd";
import { UserContext } from "../../../context/UserContext/UserState";

const CustomMenu = ({ onClick, selectedKeys, navItems }) => {
  const { token } = useContext(UserContext);

  return (
    <>
      {!token ? (
        <Menu onClick={onClick} selectedKeys={selectedKeys} mode="horizontal">
          {navItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      ) : (
        <Menu onClick={onClick} selectedKeys={selectedKeys} mode="horizontal">
          {navItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      )}
    </>
  );
};

export default CustomMenu;
