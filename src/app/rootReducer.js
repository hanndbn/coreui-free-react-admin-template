import { combineReducers } from 'redux';
import login from '../views/Pages/Login/loginReducer';
import register from '../views/Pages/Register/RegisterReducer';
import common from '../views/Pages/common/commonReducer';
export const rootReducer = combineReducers({
  login,
  common,
  register
});
