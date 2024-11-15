import './styles.css'
import { useContext } from 'react'
import { CloseIcon } from '../../assets/icons'
import {v4 as uuidv4} from 'uuid';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import OrderCart from '../OrderCart'
import { totalPrice } from '../../utils/cart'
import { Product } from '../../types'
import { Link } from 'react-router-dom'

const CheckoutSideMenu = () => {
	const {
		isCheckoutSideMenuOpen,
		closeCheckoutSideMenu,
		cartProducts,
		deleteCartProduct,
		clearCartProducts,
		order,
		setOrder,
	} = useContext(ShoppingCartContext)

	const handleCheckout = () => {
		const orderToAdd = {
			id: uuidv4(),
			date: (new Date()).toLocaleDateString(),
			products: cartProducts,
			quantityProducts: cartProducts.length,
			totalPrice: totalPrice(cartProducts),
		}

		setOrder([...order, orderToAdd])
		clearCartProducts()
		closeCheckoutSideMenu()
	}

	return (
		<aside
			className={`${
				isCheckoutSideMenuOpen ? 'flex' : 'hidden'
			} checkout-side-menu flex-col fixed right-0 bg-white border border-black rounded-lg`}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl mr-1">My Order</h2>
				<CloseIcon
					className="cursor-pointer h-6 w-6"
					onClick={closeCheckoutSideMenu}
				/>
			</div>
			<div className="px-6 overflow-y-scroll flex-1">
				{cartProducts?.map((product: Product) => (
					<OrderCart
						key={product.id}
						id={product.id}
						title={product.title}
						imageUrl={product.images[0]}
						price={product.price}
						handleDelete={deleteCartProduct}
					/>
				))}
			</div>
			<div className="px-6 mb-6">
				<p className="flex justify-between items-center">
					<span className="font-light text-xl">Total</span>
					<span className="font-medium text-2xl">
						${totalPrice(cartProducts)}
					</span>
				</p>
				<Link to='my-orders/last'>
					<button
						className={`${
							!cartProducts.length ? 'hidden' : 'block'
						} w-full bg-black py-3 text-white rounded-lg mt-2`}
						onClick={() => handleCheckout()}
					>
						Checkout
					</button>
				</Link>
			</div>
		</aside>
	)
}

export default CheckoutSideMenu
