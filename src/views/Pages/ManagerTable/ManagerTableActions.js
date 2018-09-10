import {CONST_SERVICE_URL_GET_MANAGER_TABLE, LIST_TABLE_CONSTRAINT} from "../../../app/serviceConstants.js";
import {sendRequestToServer} from "../../../app/helper.js";
import {Messages} from "../../../app/messages.js";
import {push} from 'react-router-redux';
import swal from 'sweetalert';
import _ from 'lodash';
/**********************************************************************************************************************/

export const REQUEST_MANAGER_TABLE = 'managerTable/REQUEST_MANAGER_TABLE';

export function requestManagerTable() {
  return {
    type: REQUEST_MANAGER_TABLE,
  }

}

export const REQUEST_MANAGER_TABLE_SUCCESS = 'managerTable/REQUEST_MANAGER_TABLE_SUCCESS';

export function requestManagerTableSuccess(managerTableData) {
  return {
    type: REQUEST_MANAGER_TABLE_SUCCESS,
    managerTableData,
  }
}

export const REQUEST_MANAGER_TABLE_FAILURE = 'managerTable/REQUEST_MANAGER_TABLE_FAILURE';

export function requestManagerTableFailure(errorMsg) {
  return {
    type: REQUEST_MANAGER_TABLE_FAILURE,
    errorMsg
  }
}

export const SET_SCREEN_TYPE = 'managerTable/SET_SCREEN_TYPE';

export function setScreenType(screenType) {
  return {
    type: SET_SCREEN_TYPE,
    screenType
  }
}

export const SET_TABLE_NAME = 'managerTable/SET_TABLE_NAME';

export function setTableName(tableName) {
  return {
    type: SET_TABLE_NAME,
    tableName
  }
}

export const SET_SHOW_MODAL = 'managerTable/SET_SHOW_MODAL';

export function setShowModal(showModal) {
  return {
    type: SET_SHOW_MODAL,
    showModal
  }
}

export const SET_LIST_KEY = 'managerTable/SET_LIST_KEY';

export function setListKey(listKey) {
  return {
    type: SET_LIST_KEY,
    listKey
  }
}

export const SET_TMP_DATA = 'managerTable/SET_TMP_DATA';

export function setTmpData(tmpData) {
  return {
    type: SET_TMP_DATA,
    tmpData
  }
}

export const SET_CONSTRAINT_DATA = 'managerTable/SET_CONSTRAINT_DATA';

export function setConstraintData(constraintData) {
  return {
    type: SET_CONSTRAINT_DATA,
    constraintData
  }
}

export function handleDeleteData(key) {
  return (dispatch, getState) => {
    let tmpData = {[key]: _.assign({}, getState().managerTable.managerTableData[key])};
    dispatch(setTmpData(tmpData));
  }
}

export function handleChangeDataAdd(key, value) {
  return (dispatch, getState) => {
    let originalTmpData = _.assign({}, getState().managerTable.tmpData, {[key]: value});
    dispatch(setTmpData(originalTmpData));
  }
}

export function changeData(obj, key, value) {
  return (dispatch, getState) => {
    let originalObj = _.assign({}, getState().managerTable.managerTableData[obj], {[key]: value});
    let managerTableData = _.assign({}, getState().managerTable.managerTableData, {[obj]: originalObj});
    // managerTableData[obj][key] = value;
    dispatch(requestManagerTableSuccess(managerTableData));
  }
}

//use thunk middleware in reducer for this to work
export function requestManagerTableData() {

  return (dispatch, getState) => {
    let screenType = getState().managerTable.screenType;
    let tableName = getState().managerTable.tableName;
    let managerTableData = getState().managerTable.managerTableData;
    let tmpData = getState().managerTable.tmpData;
    if (screenType == 'A' || screenType == 'E') {
      let tmpDataTmp = _.assign({}, getState().managerTable.tmpData);
      delete tmpDataTmp['ID'];
      tmpData = {
        [getState().managerTable.tmpData['ID']]: tmpDataTmp
      };
    }
    dispatch(requestManagerTable());
    let requestSuccess = (data) => {
      if (data.responseCode == '00') {
        dispatch(setShowModal(false));
        if (screenType == 'E' || screenType == 'A') {
          swal({
            title: "SUCCESS!",
            text: "Save success",
            icon: "success",
          })
        }
        dispatch(setScreenType("V"));
        dispatch(requestManagerTableSuccess(data.data));
        dispatch(setConstraintData(data.constraintData));
        dispatch(setListKey(data.listKey));
      } else {
        dispatch(requestManagerTableFailure(data.errorMessage));
      }
    };
    let requestFailure = (data) => {
      dispatch(requestManagerTableFailure(Messages.DEFAULT_ERR_MESSAGE));
    };
    let req = {
      "screenType": screenType ? screenType : "V",
      "tableName": tableName,
      "constraintTable": Object.keys(LIST_TABLE_CONSTRAINT[tableName]).join(","),
      "data": tmpData
    };
    sendRequestToServer(CONST_SERVICE_URL_GET_MANAGER_TABLE, "POST", req, requestSuccess, requestFailure, dispatch);
  }
}
