import './styles.css'
import { useContext } from 'react'
import { CloseIcon } from '../../assets/icons'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import OrderCart from '../OrderCart'
import { Product } from '../../pages/Home'
import { totalPrice } from '../../utils/cart'

const CheckoutSideMenu = () => {
	const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, deleteCartProduct } =
		useContext(ShoppingCartContext)

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
			<div className='px-6 overflow-y-scroll'>
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
			<div className='px-6'>
				<p className='flex justify-between items-center'>
					<span className='font-light text-xl'>Total</span>
					<span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
				</p>
			</div>
		</aside>
	)
}

export default CheckoutSideMenu
