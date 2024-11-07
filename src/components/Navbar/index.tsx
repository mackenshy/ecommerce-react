import { NavLink } from 'react-router-dom'
import NavbarItem from './NavbarItem'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { CartIcon } from '../../assets/icons'

const Navbar = () => {
	const { count } = useContext(ShoppingCartContext)
	return (
		<nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm top-0 font-light">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink to="/">Shopping</NavLink>
				</li>
				<li>
					<NavbarItem to="/">All</NavbarItem>
				</li>
				<li>
					<NavbarItem to="/clothes">Clothes</NavbarItem>
				</li>
				<li>
					<NavbarItem to="/electronics">Electronics</NavbarItem>
				</li>
				<li>
					<NavbarItem to="/furnitures">Furnitures</NavbarItem>
				</li>
				<li>
					<NavbarItem to="/toys">Toys</NavbarItem>
				</li>
				<li>
					<NavbarItem to="/others">Others</NavbarItem>
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
