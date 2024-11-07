import { createContext } from 'react'
import { Product } from '../pages/Home'

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
}

export const ShoppingCartContext = createContext<ShoppingCart>(
	{} as ShoppingCart
)
