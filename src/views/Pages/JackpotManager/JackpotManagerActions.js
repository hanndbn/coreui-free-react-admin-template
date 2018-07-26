import {CONST_SERVICE_URL_GET_JACKPOT} from "../../../app/serviceConstants.js";
import {sendRequestToServer} from "../../../app/helper.js";
import {Messages} from "../../../app/messages.js";
import {push} from 'react-router-redux';
import swal from 'sweetalert';
/**********************************************************************************************************************/

export const REQUEST_JACKPOT_MANAGER = 'settingControl/REQUEST_JACKPOT_MANAGER';
export function requestJackpotManager() {
  return {
    type: REQUEST_JACKPOT_MANAGER,
  }
}

export const REQUEST_JACKPOT_MANAGER_SUCCESS = 'settingControl/REQUEST_JACKPOT_MANAGER_SUCCESS';
export function requestJackpotManagerSuccess(data) {
  return {
    type: REQUEST_JACKPOT_MANAGER_SUCCESS,
    data,
  }
}

export const REQUEST_JACKPOT_MANAGER_FAILURE = 'settingControl/REQUEST_JACKPOT_MANAGER_FAILURE';
export function requestJackpotManagerFailure(errorMsg) {
  return {
    type: REQUEST_JACKPOT_MANAGER_FAILURE,
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
export const SET_JACKPOT_ID = 'settingControl/SET_JACKPOT_ID';
export function setJackpotId(jackpotId) {
  return {
    type: SET_JACKPOT_ID,
    jackpotId
  }
}
export function changeData(key, value) {
  return (dispatch, getState) => {
    let settingData = Object.assign({}, getState().setting.settingData);
    settingData[key] = value;
    dispatch(requestJackpotManagerSuccess(settingData));
  }
}

//use thunk middleware in reducer for this to work
export function requestJackpotManagerData() {

  return (dispatch, getState) => {
    let screenType = getState().jackpotManager.screenType;
    let data = getState().jackpotManager.data;
    let jackpotId = getState().jackpotManager.jackpotId;
    dispatch(requestJackpotManager());
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
        dispatch(requestJackpotManagerSuccess(data.data));
      } else {
        console.log(data.errorMessage);
        dispatch(requestJackpotManagerFailure(data.errorMessage));
      }
    };
    let requestFailure = (data) => {
      dispatch(requestJackpotManagerFailure(Messages.DEFAULT_ERR_MESSAGE));
    };
    let req = {
      "jackpotId" : jackpotId,
      "screenType": screenType ? screenType : "V",
      "data" : data ? data : {}
    };
    sendRequestToServer(CONST_SERVICE_URL_GET_JACKPOT, "POST", req, requestSuccess, requestFailure, dispatch);
  }
}
