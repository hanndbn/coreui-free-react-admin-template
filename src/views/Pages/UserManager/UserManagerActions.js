import {CONST_SERVICE_URL_GET_ALL_USER} from "../../../app/serviceConstants.js";
import {sendRequestToServer} from "../../../app/helper.js";
import {Messages} from "../../../app/messages.js";
import {push} from 'react-router-redux';
/**********************************************************************************************************************/

export const REQUEST_USER = 'userManager/REQUEST_USER';
export function requestUser() {
  return {
    type: REQUEST_USER,
  }
}

export const REQUEST_USER_SUCCESS = 'userManager/REQUEST_USER_SUCCESS';
export function requestUserSuccess(userData, itemCount) {
  return {
    type: REQUEST_USER_SUCCESS,
    userData,
    itemCount
  }
}

export const REQUEST_USER_FAILURE = 'userManager/REQUEST_USER_FAILURE';
export function requestUserFailure(errorMsg) {
  return {
    type: REQUEST_USER_FAILURE,
    errorMsg
  }
}
export const SET_NUMBER_PER_PAGE = 'userManager/SET_NUMBER_PER_PAGE';
export function setNumberPerPage(numberPerPage) {
  return {
    type: SET_NUMBER_PER_PAGE,
    numberPerPage
  }
}
export const SET_PAGE_INDEX = 'userManager/SET_PAGE_INDEX';
export function setPageIndex(pageIndex) {
  return {
    type: SET_PAGE_INDEX,
    pageIndex
  }
}
export const SET_TXT_SEARCH = 'userManager/SET_TXT_SEARCH';
export function setTextSearch(txtSearch) {
  return {
    type: SET_TXT_SEARCH,
    txtSearch
  }
}

//use thunk middleware in reducer for this to work
export function requestUserData() {
  return (dispatch, getState) => {
    let txtSearch = getState().userManager.txtSearch;
    let numberPerPage = getState().userManager.numberPerPage;
    let pageIndex = getState().userManager.pageIndex;
    dispatch(requestUser());
    let requestSuccess = (data) => {
      if (data.responseCode == '00') {
        dispatch(requestUserSuccess(data.data, data.itemCount));
      } else {
        dispatch(requestUserFailure(data.errorMessage));
      }
    };
    let requestFailure = (data) => {
      dispatch(requestUserFailure(Messages.DEFAULT_ERR_MESSAGE));
    };
    let req = {
      "txtSearch": txtSearch ? txtSearch : "",
      "numberPerPage": numberPerPage ? numberPerPage : "50",
      "pageIndex" : pageIndex ? pageIndex : "1"
    };
    sendRequestToServer(CONST_SERVICE_URL_GET_ALL_USER, "POST", req, requestSuccess, requestFailure, dispatch);
  }
}
