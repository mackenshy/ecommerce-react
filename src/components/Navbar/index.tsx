import { NavLink } from 'react-router-dom'
import NavbarItem from './NavbarItem'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { CartIcon } from '../../assets/icons'

const Navbar = () => {
	const { count, setSearchByCategory } = useContext(ShoppingCartContext)
	return (
		<nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm top-0 font-light">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink to="/" onClick={() => setSearchByCategory("")}>Shopping</NavLink>
				</li>
				<li>
					<NavbarItem to="/" onClick={() => setSearchByCategory("")}>All</NavbarItem>
				</li>
				<li>
					<NavbarItem to="/clothes" onClick={() => setSearchByCategory("clothes")}>Clothes</NavbarItem>
				</li>
				<li>
					<NavbarItem to="/electronics" onClick={() => setSearchByCategory("electronics")}>Electronics</NavbarItem>
				</li>
				<li>
					<NavbarItem to="/furnitures" onClick={() => setSearchByCategory("furnitures")}>Furnitures</NavbarItem>
				</li>
				<li>
					<NavbarItem to="/toys" onClick={() => setSearchByCategory("toys")}>Toys</NavbarItem>
				</li>
				<li>
					<NavbarItem to="/others" onClick={() => setSearchByCategory("others")}>Others</NavbarItem>
				</li>
			</ul>
			<ul className="flex items-center gap-3">
				<li className="text-black/60">jaime@mack.com</li>
				<li>
					<NavbarItem to="/my-account">My Account</NavbarItem>
				</li>
				<li>
					<NavbarItem to="/sign-in">Sign In</NavbarItem>
				</li>
				<li className="flex items-center gap-1">
					<CartIcon className="h-6 w-6 fill-black" />
					<span>{count}</span>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
