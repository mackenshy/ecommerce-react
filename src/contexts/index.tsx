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
	const [searchByTitle, setSearchByTitle] = useState('')
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

	// Get Products by Category
	const [searchByCategory, setSearchByCategory] = useState('')

	const {
		isLoading,
		error,
		data: products,
	} = useQuery<Product[], Error>({
		queryKey: ['products'],
		queryFn: () =>
			fetch(`https://api.escuelajs.co/api/v1/products`)
				.then((resp) => resp.json())
				.catch((error) => {
					throw new Error(error)
				}),
	})

	const filterProductsByTitle = () => {
		if (!products) return []
		if (!searchByTitle) {
			return products
		}

		return products?.filter((product) =>
			product.title.toLowerCase().includes(searchByTitle.toLowerCase())
		)
	}

	const filterProductsByCategory = () => {
		if (!products) return []
		if (!searchByCategory) return products

		return products?.filter((product) =>
			product.category.name
				.toLowerCase()
				.includes(searchByCategory.toLowerCase())
		)
	}

	const filterProductsByTitleAndCategory = () => {
		if (!products) return []
		if (!searchByCategory) return products

		return products?.filter(
			(product) =>
				product.category.name
					.toLowerCase()
					.includes(searchByCategory.toLowerCase()) &&
				product.title.toLowerCase().includes(searchByTitle.toLowerCase())
		)
	}

	const filterBy = (searchBType?: string) => {
		switch (searchBType) {
			case 'BY_TITLE':
				setFilteredProducts(filterProductsByTitle())
				break
			case 'BY_CATEGORY':
				setFilteredProducts(filterProductsByCategory())
				break
			case 'BY_TITLE_AND_CATEGORY':
				setFilteredProducts(filterProductsByTitleAndCategory())
				break
			case undefined:
				setFilteredProducts(products || [])
				break
			default:
				break
		}
	}

	useEffect(() => {
		console.log(
			'searchByTitle',
			searchByTitle,
			'searchByCategory',
			searchByCategory
		)
		if (searchByTitle && searchByCategory) filterBy('BY_TITLE_AND_CATEGORY')
		if (searchByTitle && !searchByCategory) filterBy('BY_TITLE')
		if (!searchByTitle && searchByCategory) filterBy('BY_CATEGORY')
		if (!searchByTitle && !searchByCategory) filterBy()
	}, [products, searchByTitle, searchByCategory])

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
				searchByTitle,
				setSearchByTitle,
				filteredProducts,
				setSearchByCategory,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}
