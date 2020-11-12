import {combineReducers} from 'redux';
//import authReducer from './auth';
//mport workReducer from "./work";
import counterReducer from "./counter";

export default combineReducers({
    //auth:authReducer,
    //work:workReducer,
    counter:counterReducer
})
