import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./store/reducers/rootReducer";

import App from "./App";
// import "./index.css";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
);
