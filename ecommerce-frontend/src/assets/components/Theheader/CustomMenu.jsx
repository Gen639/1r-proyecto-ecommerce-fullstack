import React, { useContext } from "react";
import { Menu } from "antd";
import { UserContext } from "../../../context/user/UserState";

const CustomMenu = ({ onClick, selectedKeys, items, authItems, navItems }) => {
  const { token } = useContext(UserContext);

  return (
    <div>
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
    </div>
  );
};

export default CustomMenu;
