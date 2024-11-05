import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = 'underline underline-offset-4'

const NavbarItem = ({
	to,
	children,
}: {
	to: string
	children: ReactNode
}) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) => (isActive ? activeStyle : undefined)}
		>
			{children}
		</NavLink>
	)
}

export default NavbarItem
