import { useContext } from 'react'
import { CloseIcon } from '../../assets/icons'
import './styles.css'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import OrderCart from '../OrderCart'
import { Product } from '../../pages/Home'

const CheckoutSideMenu = () => {
	const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } =
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
						title={product.title}
						imageUrl={product.images[0]}
						price={product.price}
					/>
				))}
			</div>
		</aside>
	)
}

export default CheckoutSideMenu
