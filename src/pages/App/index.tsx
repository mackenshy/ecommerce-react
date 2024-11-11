import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import SignIn from '../SignIn'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import { ShoppingCartProvider } from '../../contexts'
import CheckoutSideMenu from '../../components/CheckoutSideMenu'

const AppRoutes = () => {
	const routes = useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: 'my-orders',
			element: <MyOrders />,
		},
		{
			path: 'my-orders/:id',
			element: <MyOrder />,
		},
		{
			path: 'my-account',
			element: <MyAccount />,
		},
		{
			path: 'sing-in',
			element: <SignIn />,
		},
		{
			path: '*',
			element: <NotFound />,
		},
	])

	return routes
}

function App() {
	return (
		<ShoppingCartProvider>
			<Layout>
				<BrowserRouter>
					<AppRoutes />
					<Navbar />
					<CheckoutSideMenu />
				</BrowserRouter>
			</Layout>
		</ShoppingCartProvider>
	)
}

export default App
