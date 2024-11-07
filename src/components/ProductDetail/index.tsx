import { useContext } from 'react'
import { CloseIcon } from '../../assets/icons'
import './styles.css'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { normalizeImagePath } from '../../utils/normalizeImagePath'

const ProductDetail = () => {
	const { isProductDetailOpen, closeProductDetail, productToShow } =
		useContext(ShoppingCartContext)

	return (
		<aside
			className={`${
				isProductDetailOpen ? 'flex' : 'hidden'
			} product-detail flex-col fixed right-0 bg-white border border-black rounded-lg`}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl mr-1">Detail</h2>
				<CloseIcon
					className="cursor-pointer h-6 w-6"
					onClick={closeProductDetail}
				/>
			</div>
			<figure className='px-6'>
				<img
					src={normalizeImagePath(productToShow?.images[0])}
					alt={productToShow?.title}
					className='w-full h-full rounded-lg object-cover'
				/>
			</figure>
			<p className="flex flex-col p-6">
				<span className='font-medium text-2xl mb-2'>${productToShow?.price}</span>
				<span className='font-medium text-md'>{productToShow?.title}</span>
				<span className='font-light text-sm'>{productToShow?.description}</span>
			</p>
		</aside>
	)
}

export default ProductDetail
