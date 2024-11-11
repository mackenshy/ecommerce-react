import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { Product } from '../../types'
import OrderCart from '../../components/OrderCart'
import { GoLeftIcon } from '../../assets/icons'

function MyOrder() {
	const { order } = useContext(ShoppingCartContext)
	const { id } = useParams()
	const orderToShow = id === 'last' ? order?.slice(-1)[0] : order.find(o => o.id === id)

	return (
		<>
			<div>
				<div className="flex items-center justify-center relative w-80 mb-4">
					<Link to="/my-orders" className="absolute left-0">
						<GoLeftIcon className="h-6 2-6 text-black cursor-pointer" />
					</Link>
					<h2 className='font-medium text-xl'>My Order</h2>
				</div>
				<div className="flex flex-col w-80">
					{orderToShow?.products.map((product: Product) => (
						<OrderCart
							key={product.id}
							id={product.id}
							title={product.title}
							imageUrl={product.images[0]}
							price={product.price}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default MyOrder
