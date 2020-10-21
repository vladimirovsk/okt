import {PAY_SUCCESS} from "../actions/actionTypes";

const initialState = {
    datasource_private: [6,7,8],
    datasource_easy: [1,2,3]
}

export default function workReducer(state = initialState, action){
    switch (action.type) {
        case PAY_SUCCESS:
            return {...state,
                datasource_private :action.datasource_private,
                datasource_easy :action.datasource_easy
            };
        default:
            return state

    }
}
