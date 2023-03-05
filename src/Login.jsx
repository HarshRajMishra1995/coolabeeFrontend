import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.password);
	};

	const handleLogin = () => {
		if (email && password) {
			navigate("/landingpage");
		}
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "flex-start",
				flexDirection: "column",
				width: "50vh",
			}}>
			Email
			<input value={email} onChange={handleEmailChange} />
			Password
			<input value={password} onChange={handlePasswordChange} />
			<button onClick={handleLogin}>SignIn</button>
		</div>
	);
}

export default Login;
