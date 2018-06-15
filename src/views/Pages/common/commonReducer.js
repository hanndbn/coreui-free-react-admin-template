import {assignIn as _assignIn} from "lodash";
import * as commonActions from "./commonActions.js";
const initialState = {
	history: null,
};

const commonReducer = (state=initialState, action) => {
	switch(action.type) {
		case commonActions.SET_HISTORY:
			return {
				history: action.history,
			};
		default:
			return state;
	}
};

export default commonReducer;
