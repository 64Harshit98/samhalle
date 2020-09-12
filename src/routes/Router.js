import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, AuthPage, Dashboard, LostPage } from "../pages";

// Route Names
export const Routes = [
	{
		name: "/",
		key: "home",
		component: <HomePage />,
	},
	{
		name: "/authentication",
		key: "auth",
		component: <AuthPage />,
	},
	{
		name: "/dashboard",
		key: "dash",
		component: <Dashboard />,
	},
	{
		name: "*",
		key: "lost",
		component: <LostPage />,
	},
];

function Router() {
	return (
		<Switch>
			{Routes.map((route) => (
				<Route key={route.key} exact path={route.name}>
					{route.component}
				</Route>
			))}
		</Switch>
	);
}

export default Router;
