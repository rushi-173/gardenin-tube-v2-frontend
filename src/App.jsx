import "./App.css";
import { Routes } from "react-router-dom";
import { Navbar, Sidebar } from "./components";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="main-window">
				<Sidebar />
				<div className="main-window-container">
					Hello
				</div>
			</div>
		</div>
	);
}

export default App;
