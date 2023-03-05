import { LOGIN } from "../actions/authAction";

const initialState = {
	isLoggedIn: false,
	userDetails: {
		id: "",
		name: "",
	},
	jwt: "",
};

const loginReducer = (currentState = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return { ...currentState, isLoggedIn: true };
			break;
		default:
			return initialState;
			break;
	}
};

export { loginReducer };
