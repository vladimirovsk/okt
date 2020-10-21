import axios from "axios";
import {PAY_SUCCESS} from "./actionTypes";

export function getPayMount (year_yyyy, datasource_private, datasource_easy) {
    return async dispatch => {
        let url ='https://citypay.org.ua/rest/getPayMount';
        try {
            const responcePrivat = await  axios.post(url, {client_id:2,year_yyyy:year_yyyy},
                {
                    headers: {
                        'Access-Control-Allow-Origin': "http://localhost:8181/",
                        'Content-Type': 'application/json',
                        mode: 'cors'
                    }
                })
            const responceEasy = await  axios.post(url, {client_id:5,year_yyyy:year_yyyy},
                {
                    headers: {
                        'Access-Control-Allow-Origin': "http://localhost:8181/",
                        'Content-Type': 'application/json',
                        mode: 'cors'
                    }
                })

            const dataPrivat = responcePrivat.data
            const dataEasy = responceEasy.data

            if (dataPrivat.auth) {
                datasource_private = dataPrivat.dataset
            }
            if (dataEasy.auth) {
                datasource_easy = dataEasy.dataset
            }
            await dispatch(paySuccess(datasource_private, datasource_easy))

        } catch (e) {
            console.log(e)
        }
    }
}

export function paySuccess(datasource_private, datasource_easy){

    return {
        type: PAY_SUCCESS,
        datasource_private,
        datasource_easy
    }
}
