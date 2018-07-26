import {assignIn as _assignIn} from "lodash";
import * as jackpotManagerActions from "./JackpotManagerActions.js";
const initialState = {
	data : {},
	isRequesting: false,
	errorMsg: null,
	screenType: "V",
  jackpotId : "123456"
};


const JackpotManagerReducer = (state=initialState, action) => {
	switch(action.type) {
		case jackpotManagerActions.REQUEST_JACKPOT_MANAGER:
			return _assignIn({}, state, {
        data : {},
        isRequesting: true,
				errorMsg: null,
			});
		case jackpotManagerActions.REQUEST_JACKPOT_MANAGER_SUCCESS:
			return _assignIn({}, state, {
        data: action.data,
        isRequesting: false,
        errorMsg: null,
			});
		case jackpotManagerActions.REQUEST_JACKPOT_MANAGER_FAILURE:
			return _assignIn({}, state, {
        data: {},
        isRequesting: false,
				errorMsg: action.errorMsg,
			});
		case jackpotManagerActions.SET_SCREEN_TYPE:
			return _assignIn({}, state, {
        screenType: action.screenType,
			});
		case jackpotManagerActions.SET_JACKPOT_ID:
			return _assignIn({}, state, {
        jackpotId: action.jackpotId,
			});
		default:
			return state;
	}
};

export default JackpotManagerReducer;
