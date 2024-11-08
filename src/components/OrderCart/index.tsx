import { CloseIcon } from '../../assets/icons'
import { normalizeImagePath } from '../../utils/normalizeImagePath'

const OrderCart = ({
	id,
	title,
	imageUrl,
	price,
	handleDelete,
}: {
	id: number
	title: string
	imageUrl?: string
	price: number
	handleDelete?: (id: number) => void
}) => {
	return (
		<div className="flex justify-between items-center mb-2">
			<div className="flex items-center gap-2">
				<figure className="w-20 h-20">
					<img
						src={normalizeImagePath(imageUrl)}
						alt={title}
						className="w-full h-full object-cover rounded-lg"
					/>
				</figure>
				<p className="text-sm font-light">{title}</p>
			</div>
			<div>
				<p className="text-lg font-medium">${price}</p>
				{handleDelete && (
					<CloseIcon
						className="h-6 w-6 text-black cursor-pointer"
						onClick={() => handleDelete(id)}
					/>
				)}
			</div>
		</div>
	)
}

export default OrderCart
