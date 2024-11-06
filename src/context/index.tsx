import { createContext, ReactNode, useState } from 'react'

export type ShoppingCart = {
  count: number;
  setCount: (value: number) => void;
}; 

export const ShoppingCartContext = createContext<ShoppingCart>({} as ShoppingCart)

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
	const [count, setCount] = useState(0)

	return (
		<ShoppingCartContext.Provider value={{ count, setCount }}>
			{children}
		</ShoppingCartContext.Provider>
	)
}
