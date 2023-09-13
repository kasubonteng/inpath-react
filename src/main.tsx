import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./LandingPage.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/sign-up",
		element: <SignUp />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
