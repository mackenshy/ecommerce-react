import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { DoneIcon, PlusIcon } from '../../assets/icons'
import { normalizeImagePath } from '../../utils/normalizeImagePath'
import { Product } from '../../types'

const Card = ({ product }: { product: Product }) => {
	const {
		openProductDetail,
		closeProductDetail,
		setProductToShow,
		openCheckoutSideMenu,
		closeCheckoutSideMenu,
		addProductToCart,
		cartProducts
	} = useContext(ShoppingCartContext)

	const showProduct = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation()
		setProductToShow(product)
		closeCheckoutSideMenu()
		openProductDetail()
	}

	const addProductToShoppingCart = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation()
		addProductToCart(product)
		closeProductDetail()
		openCheckoutSideMenu()
	}

	const renderIcon = () => {
		const isInChart = cartProducts.filter(productInCart => productInCart.id === product.id).length > 0
		if (isInChart) {
			return (
				<div className="absolute top-0 right-0 flex justify-center items-center m-2">
					<DoneIcon className="h-6 w-6 text-white" />
				</div>
			)
		}

		return (
			<button
				className="absolute top-0 right-0 flex justify-center items-center m-2"
				onClick={addProductToShoppingCart}
			>
				<PlusIcon className="h-6 w-6 text-white" />
			</button>
		)
	}

	return (
		<div
			className="bg-white cursor-pointer w-56 h-60 rounded-lg"
			onClick={showProduct}
		>
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					{product?.category.name}
				</span>
				<img
					src={normalizeImagePath(product.images[0])}
					alt={product.title}
					className="w-full h-full object-cover rounded-lg"
				/>
				{renderIcon()}
			</figure>
			<p className="flex justify-between">
				<span className="text-sm font-light">{product.title}</span>
				<span className="text-lg font-medium">${product.price}</span>
			</p>
		</div>
	)
}

export default Card
