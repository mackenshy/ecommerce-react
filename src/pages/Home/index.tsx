import { useEffect, useState } from 'react'
import Card from '../../components/Card'

type ProductCategory = {
	id: number;
	name: string;
	image: string;
}

export type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: ProductCategory;
	images: [string];
}

function Home() {
	const [products, setProducts] = useState<Product[]>();

	useEffect(() => {
		fetch(`https://api.escuelajs.co/api/v1/products`)
			.then(resp => resp.json())
			.then(data => setProducts(data))
			.catch(error => console.error(error))
	}, []);

	return (
		<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
			{products?.map(product => (
				<Card key={product.id} product={product} />
			))}
		</div>
	)
}

export default Home
