import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Username from "./screens/auth/Username";
import Password from "./screens/auth/Password";
import Profile from "./screens/auth/Profile";
import Recovery from "./screens/auth/Recovery";
import Reset from "./screens/auth/Reset";
import Register from "./screens/auth/Register";
import PageNotFound from "./screens/PageNotFound";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Username />,
		},
		{
			path: "/register",
			element: <Register />,
		},
		{
			path: "/password",
			element: <Password />,
		},
		{
			path: "/recovery",
			element: <Recovery />,
		},
		{
			path: "/reset",
			element: <Reset />,
		},
		{
			path: "/profile",
			element: <Profile />,
		},
		{
			path: "*",
			element: <PageNotFound />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
