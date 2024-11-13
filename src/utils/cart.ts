import { Product } from '../types'

/**
 * This function calculate the total price of a product list
 * @param {array} products - array of Products
 * @return {number} total price
 * */
export const totalPrice = (products: Product[]) => {
	return products.reduce((sum, product) => sum + product.price, 0)
}
