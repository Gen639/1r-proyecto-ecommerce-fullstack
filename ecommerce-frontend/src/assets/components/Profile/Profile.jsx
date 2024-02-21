import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/user/UserState";
import { Avatar, Card } from "antd";

import { Spin } from "antd";
const { Meta } = Card;

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);
  console.log(user);
  if (!user) {
    return (
      <>
        <span>Loading...</span>
        <Spin />
      </>
    );
  }

  return (
    <>
      {" "}
      <div>
        <h2>User Profile Info</h2>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f35f.svg"
            />
          }
        >
          <Meta
            avatar={
              <Avatar src="https://images.emojiterra.com/google/android-11/512px/1f954.png" />
            }
            title={user.name}
            description={user.email}
          />
        </Card>
        <div>
          <div>
            <h2>Order List</h2>

            {user.Orders.length === 0 ? (
              <p>No orders found</p>
            ) : (
              user.Orders.map((order) => (
                <Card key={order.id}>
                  <h3>
                    Order Number: {order.number}, Created on{" "}
                    {new Date(
                      order.Products[0].ProductOrder.createdAt
                    ).toLocaleString()}
                  </h3>
                  <ul>
                    {order.Products.map((product) => (
                      <li key={product.id}>
                        <p>
                          Product: {product.name} / Price: {"\u20AC"}
                          {product.price}{" "}
                        </p>
                        <p></p>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Total: {"\u20AC"}
                    {order.Products.reduce(
                      (total, product) => total + parseFloat(product.price),
                      0
                    ).toFixed(2)}
                    {"\u20AC"}
                  </p>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
