import { ReactNode, useState } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'
import { Order, Product } from '../types'

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
	// Shopping cart - Increment quantity
	const [count, setCount] = useState(0)
	
	// Product Detail - Open/Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
	const openProductDetail = () => setIsProductDetailOpen(true)
	const closeProductDetail = () => setIsProductDetailOpen(false)

	// Product Detail - Show product
	const [productToShow, setProductToShow] = useState<Product>()


	// Checkout Side Menu - Open/Close
	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenu] = useState(false)
	const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true)
	const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false)

	// Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState<Product[]>([])
	const addProductToCart = (product: Product) => setCartProducts([...cartProducts, product])
	const deleteCartProduct = (id: number) => {
		const filteredProducts = cartProducts.filter(product => product.id !== id)
		setCartProducts(filteredProducts)
	}
	const clearCartProducts = () => setCartProducts([])

	// Shopping Cart - Order
	const [order, setOrder] = useState<Order[]>([])

	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
				isProductDetailOpen,
				openProductDetail,
				closeProductDetail,
				productToShow,
				setProductToShow,
				isCheckoutSideMenuOpen,
				openCheckoutSideMenu,
				closeCheckoutSideMenu,
				cartProducts,
				addProductToCart,
				deleteCartProduct,
				clearCartProducts,
				order,
				setOrder,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}
