import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import RootLayout from "./layouts/RootLayout/RootLayout";
import HomePage from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/log-in",
				element: <LoginPage />,
			},
			{
				path: "/sign-up",
				element: <SignUpPage />,
			},
		],
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
