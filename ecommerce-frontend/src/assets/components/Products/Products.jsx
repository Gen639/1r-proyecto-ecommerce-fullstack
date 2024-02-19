import React, { useContext, useEffect, useState } from "react";
import { Avatar, Card, Flex, Spin } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const { Meta } = Card;
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";

const Products = () => {
  const { getProducts, products } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (products == "") {
    return (
      <>
        <span>Loading...</span>
        <Spin />
      </>
    );
  }
  console.log(products);
  return (
    <>
      <h2>Product List</h2>
      <Flex wrap="wrap" gap="small">
        {products.map((product) => (
          <div key={product.id}>
            <Card
              style={{
                width: 230,
                marginTop: 16,
              }}
              actions={[
                <ShoppingCartOutlined />,
                // <SettingOutlined key="setting" />,
                // <EditOutlined key="edit" />,
                // <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="#" />}
                title={product.name}
                description={`${product.price} EUR`}
              />
            </Card>
          </div>
        ))}
      </Flex>
    </>
  );
};

export default Products;
