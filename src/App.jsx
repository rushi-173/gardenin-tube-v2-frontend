import "./App.css";
import { Routes } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import {Home} from "./pages";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="main-window">
				<Sidebar />
				<div className="main-window-container">
					<Home/>
				</div>
			</div>
		</div>
	);
}

export default App;
