import { useContext } from 'react'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'

function Home() {
	const { isLoading, filteredProducts, searchByValue, setSearchByValue } = useContext(ShoppingCartContext)

	return (
		<>
			<div className="flex items-center justify-center relative w-80 mb-4">
				<h1 className="font-medium text-xl">Exclusive Products</h1>
			</div>
			<input
				type="text"
				placeholder="Search a product"
				className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
				onChange={(e) => setSearchByValue(e.target.value)}
				value={searchByValue}
			/>
			{filteredProducts.length > 0 && <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
				{filteredProducts?.map((product) => (
					<Card key={product.id} product={product} />
				))}
			</div>}
			{(filteredProducts.length === 0 && searchByValue) && <p>We don't have anything</p>}
			
			{isLoading && <p>Loading...</p>}
			
			<ProductDetail />
		</>
	)
}

export default Home
