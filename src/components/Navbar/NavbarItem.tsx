import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = 'underline underline-offset-4'

const NavbarItem = ({
	to,
	onClick,
	children,
}: {
	to: string
	onClick?: (event: React.MouseEvent<HTMLElement>) => void
	children: ReactNode
}) => {
	return (
		<NavLink
			to={to}
			onClick={onClick}
			className={({ isActive }) => (isActive ? activeStyle : undefined)}
		>
			{children}
		</NavLink>
	)
}

export default NavbarItem
