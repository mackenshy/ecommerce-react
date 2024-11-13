import { Product } from '../types'

const filterProductsByTitle = (products?: Product[], title?: string) => {
	if (!products) return []
	if (!title) {
		return products
	}

	return products?.filter((product) =>
		product.title.toLowerCase().includes(title.toLowerCase())
	)
}

const filterProductsByCategory = (products?: Product[], category?: string) => {
	if (!products) return []
	if (!category) return products

	return products?.filter((product) =>
		product.category.name.toLowerCase().includes(category.toLowerCase())
	)
}

const filterProductsByTitleAndCategory = (
	products?: Product[],
	title?: string,
	category?: string
) => {
	if (!products) return []
	if (!title && !category) return products

	return products?.filter(
		(product) =>
			product.title.toLowerCase().includes(title?.toLowerCase() || '') &&
			product.category.name
				.toLowerCase()
				.includes(category?.toLowerCase() || '')
	)
}

export {
	filterProductsByTitle,
	filterProductsByCategory,
	filterProductsByTitleAndCategory,
}
