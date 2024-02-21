import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../../context/ProductsContext/ProductsState'
import {OrdersContext} from '../../../context/OrderContext/orderState'
import { Card, Col } from "antd"

const Cart = () => {
	const { cart, clearCart } = useContext(ProductsContext)
	const { createOrder } = useContext(OrdersContext)

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const createNewOrder = () => {
		createOrder(cart)
		clearCart()
	}

	const cartItem = cart.map((cartItem) => {
		console.log(cartItem);
		return (
			<Col span={8} key={cartItem._id}>
				<Card title={cartItem.name} className="cart">
					<span>{console.log(cartItem)};</span>
					<span>{cartItem.price} €</span>
				</Card>
			</Col>
		);
	});
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
	)
}

export default Cart
