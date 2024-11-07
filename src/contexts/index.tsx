import { ReactNode, useState } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'
import { Product } from '../pages/Home'

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
	// Shopping cart - Increment quantity
	const [count, setCount] = useState(0)
	
	// Product Detail - Open/Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
	const openProductDetail = () => setIsProductDetailOpen(true)
	const closeProductDetail = () => setIsProductDetailOpen(false)

	// Product Detail - Show product
	const [productToShow, setProductToShow] = useState<Product>()

	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
				isProductDetailOpen,
				openProductDetail,
				closeProductDetail,
				productToShow,
				setProductToShow
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}
