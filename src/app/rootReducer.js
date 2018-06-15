import { combineReducers } from 'redux';
import login from '../views/Pages/Login/loginReducer';
import common from '../views/Pages/common/commonReducer';
export const rootReducer = combineReducers({
  login,
  common,
});
