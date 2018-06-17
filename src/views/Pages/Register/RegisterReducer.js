import {assignIn as _assignIn} from "lodash";
import * as registerActions from "./RegisterActions.js";
const initialState = {
	errorMsg: null,
};


const RegisterReducer = (state=initialState, action) => {
	switch(action.type) {
		case registerActions.REQUEST_REGISTER:
			return _assignIn({}, state, {
				errorMsg: null,
			});
		case registerActions.REQUEST_REGISTER_SUCCESS:
			return _assignIn({}, state, {
				errorMsg: null,
			});
		case registerActions.REQUEST_REGISTER_FAILURE:
			return _assignIn({}, state, {
				errorMsg: action.errorMsg,
			});
		default:
			return state;
	}
};

export default RegisterReducer;
