import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.

const App = () => {
	return (
		<BrowserRouter>
				<Routes>
					<Route path="/" element={<WelcomePage />}></Route>
			</Routes>
		</BrowserRouter>
	);
};
export default App;
