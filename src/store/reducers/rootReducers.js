import {combineReducers} from 'redux';
import authReducer from './auth';
import workReducer from "./work";
import counterReducer from "./counter";

export default combineReducers({
    auth:authReducer,
    work:workReducer,
    counter:counterReducer
})
