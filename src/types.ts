export type ProductCategory = {
	id: number
	name: string
	image: string
}

export type Product = {
	id: number
	title: string
	price: number
	description: string
	category: ProductCategory
	images: [string]
}

export type Order = {
	id: string
	date: string
	products: Product[]
	quantityProducts: number
	totalPrice: number
}
