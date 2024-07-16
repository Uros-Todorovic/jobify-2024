import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Landing, Register, Login, DashbordLayout, Error } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'dashboard',
				element: <DashbordLayout />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router}></RouterProvider>;
};

export default App;
