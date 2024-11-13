import { createContext } from 'react'
import { Order, Product } from '../types'

export type ShoppingCart = {
	count: number
	setCount: (value: number) => void
	isProductDetailOpen: boolean
	openProductDetail: () => void
	closeProductDetail: () => void
	productToShow?: Product
	setProductToShow: (product: Product) => void
	isCheckoutSideMenuOpen: boolean
	openCheckoutSideMenu: () => void
	closeCheckoutSideMenu: () => void
	cartProducts: Product[]
	addProductToCart: (product: Product) => void
	deleteCartProduct: (id: number) => void
	clearCartProducts: () => void
	order: Order[]
	setOrder: (order: Order[]) => void
	products?: Product[]
	isLoading: boolean
	error: Error | null
	searchByTitle?: string
	setSearchByTitle: (value: string) => void
	filteredProducts: Product[]
	setSearchByCategory: (value: string) => void
}

export const ShoppingCartContext = createContext<ShoppingCart>(
	{} as ShoppingCart
)
