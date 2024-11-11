import { BagIcon, CalendarIcon, GoRightIcon } from "../../assets/icons"

const OrdersCart = ({
	date,
	totalPrice,
	totalProducts,
}: {
	date: string
	totalPrice: number
	totalProducts: number
}) => {
	return (
		<div className="flex justify-between items-center mb-4 border border-black w-80 p-4 rounded-lg">
			<div className="flex justify-between w-full">
				<p className="flex flex-col">
					<span className="font-light flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-black" />{date}</span>
					<span className="font-light flex items-center gap-1"><BagIcon className="w-4 h-4 text-black"/>{totalProducts} articles</span>
				</p>
				<p className="flex gap-2 items-center">
					<span className="font-medium text-2xl">${totalPrice}</span>
					<GoRightIcon className="w-6 h-6 text-black" />
				</p>
			</div>
		</div>
	)
}

export default OrdersCart
