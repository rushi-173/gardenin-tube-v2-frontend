import "./App.css";
import { Routes } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { Home } from "./pages";
import axios from "axios";
import {useData} from "./contexts/data-context";
import {useEffect} from "react";

function App() {

  const {videos, dispatch} = useData();
	const loadVideos = async () => {
    try {
      const response = await axios.get(
        "https://VideoLib-Temp-Backend.rushi173.repl.co/"
      );
      console.log()
      dispatch({ type: "INITIALIZE_VIDEOS", payload: response.data.data });
    } catch (error) {
      console.log(error);
    }
  };

	useEffect(() => {
    !videos.length && loadVideos();
  }, []);


	return (
		<div className="App">
			<Navbar />
			<div className="main-window">
				<Sidebar />
				<div className="main-window-container">
					<Home />
				</div>
			</div>
		</div>
	);
}

export default App;
