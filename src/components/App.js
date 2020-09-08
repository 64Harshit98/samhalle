import React from "react";
import "./App.css";

import { Link } from "react-router-dom";
import Router from "../routes/Router";

function App() {
	return (
		<div className="App">
			<Link to="/">Home</Link>
			<Router />
		</div>
	);
}

export default App;
