import { createContext } from 'react'

export type ShoppingCart = {
	count: number
	setCount: (value: number) => void
}

export const ShoppingCartContext = createContext<ShoppingCart>(
	{} as ShoppingCart
)
