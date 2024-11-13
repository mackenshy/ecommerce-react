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
import { QueryClient, QueryClientProvider } from 'react-query'

const AppRoutes = () => {
	const routes = useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/clothes',
			element: <Home />,
		},
		{
			path: '/electronics',
			element: <Home />,
		},
		{
			path: '/furnitures',
			element: <Home />,
		},
		{
			path: '/toys',
			element: <Home />,
		},
		{
			path: '/others',
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

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ShoppingCartProvider>
				<Layout>
					<BrowserRouter>
						<AppRoutes />
						<Navbar />
						<CheckoutSideMenu />
					</BrowserRouter>
				</Layout>
			</ShoppingCartProvider>
		</QueryClientProvider>
	)
}

export default App
