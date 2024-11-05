import { NavLink } from "react-router-dom"
import NavbarItem from "./NavbarItem"

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm top-0 font-light">
			<ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">
            Shopping
          </NavLink>
        </li>
        <li>
          <NavbarItem to="/">
            All
          </NavbarItem>
        </li>
        <li>
          <NavbarItem to="/clothes">
            Clothes
          </NavbarItem>
        </li>
        <li>
          <NavbarItem to="/electronics">
            Electronics
          </NavbarItem>
        </li>
        <li>
          <NavbarItem to="/furnitures">
            Furnitures
          </NavbarItem>
        </li>
        <li>
          <NavbarItem to="/toys">
            Toys
          </NavbarItem>
        </li>
        <li>
          <NavbarItem to="/others">
            Others
          </NavbarItem>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          jaime@mack.com
        </li>
        <li>
          <NavbarItem to="/my-account">
            My Account
          </NavbarItem>
        </li>
        <li>
          <NavbarItem to="/sign-in">
            Sign In
          </NavbarItem>
        </li>
        <li>
          🛒
        </li>
      </ul>
		</nav>
	)
}

export default Navbar
