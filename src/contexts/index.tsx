import { ReactNode, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
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
	const addProductToCart = (product: Product) =>
		setCartProducts([...cartProducts, product])
	const deleteCartProduct = (id: number) => {
		const filteredProducts = cartProducts.filter((product) => product.id !== id)
		setCartProducts(filteredProducts)
	}
	const clearCartProducts = () => setCartProducts([])

	// Shopping Cart - Order
	const [order, setOrder] = useState<Order[]>([])

	// Get Products by Title
	const [searchByValue, setSearchByValue] = useState('')
	const [filteredProducts, setFilteredProducts] = useState<
		Product[]
	>([])

	const { isLoading, error, data: products } = useQuery<Product[], Error>({
		queryKey: ['products'],
		queryFn: () =>
			fetch(`https://api.escuelajs.co/api/v1/products`)
				.then(resp => resp.json())
				.catch(error => { throw new Error(error) })
	})

	const filterProductsByTitle = (
		searchByTitle: string,
		productstoFilter?: Product[]
	) => {
		if(!productstoFilter) return []

		return productstoFilter?.filter((productToFilter) =>
			productToFilter.title.toLowerCase().includes(searchByTitle.toLowerCase())
		)
	}

	useEffect(() => {
		if (!searchByValue) {
			setFilteredProducts(products || [])
			return
		}

		setFilteredProducts(filterProductsByTitle(searchByValue, products))
	}, [products, searchByValue])

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
				products,
				isLoading,
				error,
				searchByValue,
				setSearchByValue,
				filteredProducts,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}
