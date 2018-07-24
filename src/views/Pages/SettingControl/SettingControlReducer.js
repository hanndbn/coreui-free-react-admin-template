import {assignIn as _assignIn} from "lodash";
import * as settingControlActions from "./SettingControlActions.js";
const initialState = {
	setting : {},
	isRequesting: false,
	errorMsg: null,
	screenType: "V",
  settingData: {},
  tmpData: {},
};


const SettingControlReducer = (state=initialState, action) => {
	switch(action.type) {
		case settingControlActions.REQUEST_SETTING:
			return _assignIn({}, state, {
        settingData : {},
        isRequesting: true,
				errorMsg: null,
			});
		case settingControlActions.REQUEST_SETTING_SUCCESS:
			return _assignIn({}, state, {
        settingData: action.settingData,
        isRequesting: false,
        errorMsg: null,
			});
		case settingControlActions.REQUEST_SETTING_FAILURE:
			return _assignIn({}, state, {
        settingData: {},
        isRequesting: false,
				errorMsg: action.errorMsg,
			});
		case settingControlActions.SET_SCREEN_TYPE:
			return _assignIn({}, state, {
        screenType: action.screenType,
			});
		default:
			return state;
	}
};

export default SettingControlReducer;
