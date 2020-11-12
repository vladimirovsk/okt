import React from 'react';
import axios from 'axios';
import {FirebaseContext}  from './firebaseContext'
import { firebaseReduser } from './firebaseReduser';
import {SHOW_LOADER, REMOVE_NOTE, FETCH_NOTES, ADD_NOTE} from '../type'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {
  
  
  const initialState = {
    notes:[],
    loading: false
  }
  
  const [state, dispatch] = React.useReducer(firebaseReduser, initialState);

  const showLoader = () => dispatch({type: SHOW_LOADER})

  const fetchNotes = async () => {
    showLoader();
   
    const res = await axios.get(`${url}/notes.json`)
    
    const payload = Object.keys(res.data).map(key => {
      return {
        ...res.data[key],
        id: key
      }
    })
    dispatch({type: FETCH_NOTES, payload})
  }

  const addNote = async title => {
    const note = {
      title, 
      date: new Date().toJSON()
    }
    const res = await axios.post(`${url}/notes.json`, note)  
    const payload = {...note, id:res.data.name}
    dispatch({type: ADD_NOTE, payload})
  }

  const removeNote = async id =>{
    await axios.post(`${url}/notes/${id}.json`) 

    dispatch({type:  REMOVE_NOTE, payload: id})
  }
   return (
     <FirebaseContext.Provider value ={{
       showLoader, addNote, removeNote, fetchNotes,
       loading: state.loading,
       note: state.notes
     }}>
        {children}
     </FirebaseContext.Provider>
   )
}