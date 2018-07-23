import {assignIn as _assignIn} from "lodash";
import * as userManagerActions from "./UserManagerActions.js";
const initialState = {
	userData : [],
	isRequesting: false,
	errorMsg: null,
  txtSearch: "",
  totalPage: "0",
  numberPerPage: "10",
};


const UserManagerReducer = (state=initialState, action) => {
	switch(action.type) {
		case userManagerActions.REQUEST_USER:
			return _assignIn({}, state, {
        userData: [],
        isRequesting: true,
				errorMsg: null,
			});
		case userManagerActions.REQUEST_USER_SUCCESS:
			return _assignIn({}, state, {
        userData: action.userData,
        totalPage: action.totalPage,
        isRequesting: false,
        errorMsg: null,
			});
		case userManagerActions.REQUEST_USER_FAILURE:
			return _assignIn({}, state, {
        userData: [],
        isRequesting: false,
				errorMsg: action.errorMsg,
			});
		case userManagerActions.SET_NUMBER_PER_PAGE:
			return _assignIn({}, state, {
        numberPerPage: action.numberPerPage,
			});
		case userManagerActions.SET_PAGE_INDEX:
			return _assignIn({}, state, {
        pageIndex: action.pageIndex,
			});
    case userManagerActions.SET_TXT_SEARCH:
      return _assignIn({}, state, {
        txtSearch: action.txtSearch,
      });
		default:
			return state;
	}
};

export default UserManagerReducer;
