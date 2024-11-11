import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import OrdersCart from '../../components/OrdersCart'

function MyOrders() {
	const { order } = useContext(ShoppingCartContext)

	return (
		<>
			<div className="flex items-center justify-center relative w-80 mb-4">
				<h1 className='font-medium text-xl'>My Orders</h1>
			</div>
			{order?.map((order) => (
				<Link key={order.id} to={`/my-orders/${order.id}`}>
					<OrdersCart
            date={order.date}
						totalPrice={order.totalPrice}
						totalProducts={order.quantityProducts}
					/>
				</Link>
			))}
		</>
	)
}

export default MyOrders
