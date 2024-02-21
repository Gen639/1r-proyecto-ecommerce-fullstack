import { useContext, useEffect } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import { OrdersContext } from "../../../context/OrderContext/orderState";
import { Card, Col } from "antd";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const productsIdsToOrder = cart.map((cartItem) => cartItem.id);

  const createNewOrder = () => {
    createOrder(productsIdsToOrder);

    clearCart();
  };

  const cartItem = cart.map((cartItem) => {
    return (
      <div key={cartItem.id}>
        <Card title={cartItem.name} className="cart" style={{ width: "100%" }}>
          <span>{console.log(cartItem)}</span>
          <span>€ {cartItem.price} </span>
        </Card>
      </div>
    );
  });
  console.log(cart);
  console.log(productsIdsToOrder);
  return (
    <>
      <h1>Cart</h1>
      <section className="cart">
        {cart && cart.length > 0 ? (
          cartItem
        ) : (
          <span>You dont have any products added</span>
        )}
      </section>
      <button onClick={() => clearCart()}>Clear cart</button>
      <button onClick={() => createNewOrder()}>Create Order</button>
    </>
  );
};

export default Cart;
