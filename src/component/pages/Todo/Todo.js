import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core'
//import AlertContext from '../../../context/alert/alertContext'
import { FirebaseContext } from '../../../context/firebase/firebaseContext';
import Loader from '../../Loader/Loader';
//import {Tables} from '../../Tables/Tables';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
 
  appBarSpacer: theme.mixins.toolbar,
  
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },


}));



function Todo(){

  const classes = useStyles();
  //const alert = React.useContext(AlertContext)
  const {loading,fetchNotes, notes} = React.useContext(FirebaseContext)
  const firebase = React.useContext(FirebaseContext)
  // const handleBtnClick = event =>{ 
  //     event.preventDefault();
  //     firebase.addNote('TEST TODO').then(()=>{
  //       alert.show('Record add', 'success', 3000);
  //     }).catch(()=>{
  //       alert.show('Error create record', 'error', 3000);
  //     })
  // }      

  React.useEffect(()=>{
      fetchNotes()
      console.log("notes", firebase)
      // eslint-disable-next-line
  }, [])

  

  return(
    <React.Fragment>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <h3>TODO</h3>
        {/*<button onClick={handleBtnClick}>ADD TODO</button>*/}
          {loading 
          ? <Loader /> 
          : <div>
            {notes}
          </div>
          }
      </Container>   


    </React.Fragment>
    
  )
} 

export default Todo;