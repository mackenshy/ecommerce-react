import { ReactNode, useState } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
	const [count, setCount] = useState(0)

	return (
		<ShoppingCartContext.Provider value={{ count, setCount }}>
			{children}
		</ShoppingCartContext.Provider>
	)
}
