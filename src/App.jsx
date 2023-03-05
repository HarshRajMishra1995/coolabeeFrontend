import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import Login from "./Login";

function App() {
	const state = useSelector((state) => state);
	console.log("App State is -----> ", state);
	const [count, setCount] = useState(0);

	return (
		<Routes>
			<Route exact path="/" element={<Login />} />
			{/* <Route exact path="/landingpage" element={}/> */}
		</Routes>
	);
}

export default App;
