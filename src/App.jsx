import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";

import { Toaster } from "react-hot-toast";


function App() {
	return (
		
			<BrowserRouter>
				<Toaster position="top-right" />
				<div className="w-full h-screen bg-primary text-secondary ">
					<Routes path="/">
						<Route path="/*" element={<HomePage />} />
						
					</Routes>
				</div>
			</BrowserRouter>
		
	);
}

export default App;
