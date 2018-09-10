import {assignIn as _assignIn} from "lodash";
import * as managerTableActions from "./ManagerTableActions.js";
const initialState = {
	setting : {},
	isRequesting: false,
	errorMsg: null,
	screenType: "V",
  managerTableData: {},
  tmpData: {},
  tableName : "",
  showModal : false,
  listKey: [],
  constraintData: {}
};


const SettingControlReducer = (state=initialState, action) => {
	switch(action.type) {
		case managerTableActions.REQUEST_MANAGER_TABLE:
    return _assignIn({}, state, {
      managerTableData : {},
      isRequesting: true,
      errorMsg: null,
    });
    case managerTableActions.SET_TABLE_NAME:
      return _assignIn({}, state, {
        tableName: action.tableName
      });
    case managerTableActions.SET_CONSTRAINT_DATA:
      return _assignIn({}, state, {
        constraintData: action.constraintData
      });
    case managerTableActions.SET_TMP_DATA:
      return _assignIn({}, state, {
        tmpData: action.tmpData
      });
    case managerTableActions.SET_SHOW_MODAL:
      return _assignIn({}, state, {
        showModal: action.showModal
      });
    case managerTableActions.SET_LIST_KEY:
      return _assignIn({}, state, {
        listKey: action.listKey
      });
		case managerTableActions.REQUEST_MANAGER_TABLE_SUCCESS:
			return _assignIn({}, state, {
        managerTableData: action.managerTableData,
        isRequesting: false,
        errorMsg: null,
			});
		case managerTableActions.REQUEST_MANAGER_TABLE_FAILURE:
			return _assignIn({}, state, {
        managerTableData: {},
        isRequesting: false,
				errorMsg: action.errorMsg,
			});
		case managerTableActions.SET_SCREEN_TYPE:
			return _assignIn({}, state, {
        screenType: action.screenType,
			});
		default:
			return state;
	}
};

export default SettingControlReducer;
