import { useContext } from "react"
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext"
import { Product } from "../../types"
import OrderCart from "../../components/OrderCart"

function MyOrder() {
  const { order } =useContext(ShoppingCartContext)
  
	return (
		<>
			<div>
				<h2 className="mb-2">My Order</h2>
				<div className="flex flex-col w-80">
					{order?.slice(-1)[0]?.products.map((product: Product) => (
						<OrderCart
							key={product.id}
							id={product.id}
							title={product.title}
							imageUrl={product.images[0]}
							price={product.price}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default MyOrder
