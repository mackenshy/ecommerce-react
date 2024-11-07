import { CloseIcon } from '../../assets/icons'
import './styles.css'

const ProductDetail = () => {
	return (
		<aside className="product-detail flex flex-col fixed right-0 bg-white border border-black rounded-lg">
			<div className="flex justify-between items-center p-6">
        <h2 className='font-medium text-xl mr-1'>Detail</h2>
        <CloseIcon className='cursor-pointer h-6 w-6'/>
      </div>
		</aside>
	)
}

export default ProductDetail
