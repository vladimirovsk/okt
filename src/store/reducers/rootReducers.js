import {combineReducers} from 'redux';
import authReducer from './auth';
//mport workReducer from "./work";

export default combineReducers({
    auth:authReducer
})
