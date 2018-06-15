import {assignIn as _assignIn} from "lodash";
import * as loginActions from "./loginActions.js";
const initialState = {
	username: null,
	isAuthenticated: false,
	isRequestingLogin: false,
	errorMsg: null,
};


const loginReducer = (state=initialState, action) => {
	switch(action.type) {
		case loginActions.REQUEST_LOGIN:
			return _assignIn({}, state, {
				username: null,
				token: null,
				isAuthenticated: false,
				isRequestingLogin: true,
				errorMsg: null,
			});
		case loginActions.REQUEST_LOGIN_SUCCESS:
			return _assignIn({}, state, {
				username: action.username,
				isAuthenticated: true,
				isRequestingLogin: false,
				errorMsg: null,
			});
		case loginActions.REQUEST_LOGIN_FAILURE:
			return _assignIn({}, state, {
				username: null,
				isAuthenticated: false,
				isRequestingLogin: false,
				errorMsg: action.errorMsg,
			});
		default:
			return state;
	}
};

export default loginReducer;
