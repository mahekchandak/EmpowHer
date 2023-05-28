/*eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PeriodTracker from './components/PeriodTracker';

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			{/* Outlet */}
			<Outlet />
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout/>,
		// errorElement: <Error/>,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/period-tracker",
				element: <PeriodTracker />,
			},
		]
	},
	
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
