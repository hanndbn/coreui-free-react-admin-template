import {CONST_SERVICE_URL_GET_SETTING} from "../../../app/serviceConstants.js";
import {sendRequestToServer} from "../../../app/helper.js";
import {Messages} from "../../../app/messages.js";
import {push} from 'react-router-redux';
import swal from 'sweetalert';
/**********************************************************************************************************************/

export const REQUEST_SETTING = 'settingControl/REQUEST_SETTING';
export function requestSetting() {
  return {
    type: REQUEST_SETTING,
  }
}

export const REQUEST_SETTING_SUCCESS = 'settingControl/REQUEST_SETTING_SUCCESS';
export function requestSettingSuccess(settingData) {
  return {
    type: REQUEST_SETTING_SUCCESS,
    settingData,
  }
}

export const REQUEST_SETTING_FAILURE = 'settingControl/REQUEST_SETTING_FAILURE';
export function requestSettingFailure(errorMsg) {
  return {
    type: REQUEST_SETTING_FAILURE,
    errorMsg
  }
}
export const SET_SCREEN_TYPE = 'settingControl/SET_SCREEN_TYPE';
export function setScreenType(screenType) {
  return {
    type: SET_SCREEN_TYPE,
    screenType
  }
}
export function changeData(key, value) {
  return (dispatch, getState) => {
    let settingData = Object.assign({}, getState().setting.settingData);
    settingData[key] = value;
    dispatch(requestSettingSuccess(settingData));
  }
}

//use thunk middleware in reducer for this to work
export function requestSettingData() {

  return (dispatch, getState) => {
    let screenType = getState().setting.screenType;
    let settingData = getState().setting.settingData;
    dispatch(requestSetting());
    let requestSuccess = (data) => {
      if (data.responseCode == '00') {
        if(screenType == "E"){
          swal({
            title: "SUCCESS!",
            text: "Save success",
            icon: "success",
          })
        }
        dispatch(setScreenType("V"));
        dispatch(requestSettingSuccess(data.data));
      } else {
        dispatch(requestSettingFailure(data.errorMessage));
      }
    };
    let requestFailure = (data) => {
      dispatch(requestSettingFailure(Messages.DEFAULT_ERR_MESSAGE));
    };
    let req = {
      "screenType": screenType ? screenType : "V",
      "data" : settingData ? settingData : {}
    };
    sendRequestToServer(CONST_SERVICE_URL_GET_SETTING, "POST", req, requestSuccess, requestFailure, dispatch);
  }
}
