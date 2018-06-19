import {CONST_SERVICE_URL_REGISTER} from "../../../app/serviceConstants.js";
import {sendRequestToServer} from "../../../app/helper.js";
import {Messages} from "../../../app/messages.js";
import {push} from 'react-router-redux';
/**********************************************************************************************************************/

export const REQUEST_REGISTER = 'register/REQUEST_REGISTER';
export function requestRegister() {
	return {
		type: REQUEST_REGISTER,
	}
}

export const REQUEST_REGISTER_SUCCESS = 'register/REQUEST_REGISTER_SUCCESS';
export function requestRegisterSuccess() {
	return {
		type: REQUEST_REGISTER_SUCCESS
	}
}

export const REQUEST_REGISTER_FAILURE = 'register/REQUEST_REGISTER_FAILURE';
export function requestRegisterFailure(errorMsg) {
	return {
		type: REQUEST_REGISTER_FAILURE,
		errorMsg
	}
}

//use thunk middleware in reducer for this to work
export function registerUser(userName, email, password, history) {
	return (dispatch, getState) => {
		if (!userName) {
			dispatch(requestRegisterFailure(Messages.MESSAGE_USERNAME_CANT_BE_EMPTY));
			return;
		}
    if (!email) {
      dispatch(requestRegisterFailure(Messages.MESSAGE_EMAIL_CANT_BE_EMPTY));
      return;
    }
		if (!password) {
			dispatch(requestRegisterFailure(Messages.MESSAGE_PASSWORD_CANT_BE_EMPTY));
			return;
		}
		dispatch(requestRegister());
		let registerSuccess = (data) => {
			if(data.responseCode == '00'){
              dispatch(requestRegisterSuccess());
              history.push('/Home');
			} else{
                dispatch(requestRegisterFailure(data.errorMessage));

			}
		};
		let registerFailure = (data) => {
			dispatch(requestRegisterFailure(Messages.DEFAULT_ERR_MESSAGE));
		};
		let req = {
			"username": userName,
			"email": email,
			"password": password
		};
		sendRequestToServer(CONST_SERVICE_URL_REGISTER, "POST", req, registerSuccess, registerFailure, dispatch);
	}
}
