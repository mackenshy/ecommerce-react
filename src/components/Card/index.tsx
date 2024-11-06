import { useContext } from 'react'
import { Product } from '../../pages/Home'
import { ShoppingCartContext } from '../../context'

const normalizeImage = (image: string) => {
	if (!image) return

	return image.replace('[', '').replace(']', '').replaceAll('"', '')
}

const Card = ({ product }: { product: Product }) => {
	const { count, setCount } = useContext(ShoppingCartContext)

	return (
		<div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					{product?.category.name}
				</span>
				<img
					src={normalizeImage(product.images[0])}
					alt="headphones"
					className="w-full h-full object-cover rounded-lg"
				/>
				<button
					className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
					onClick={() => setCount(count + 1)}
				>
					+
				</button>
			</figure>
			<p className="flex justify-between">
				<span className="text-sm font-light">{product.title}</span>
				<span className="text-lg font-medium">${product.price}</span>
			</p>
		</div>
	)
}

export default Card
