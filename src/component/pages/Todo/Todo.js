import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Paper} from '@material-ui/core'
import AlertContext from '../../../context/alert/alertContext'
import { FirebaseContext } from '../../../context/firebase/firebaseContext';
import Loader from '../../Loader/Loader';
import { DataGrid} from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
 
  appBarSpacer: theme.mixins.toolbar,
  

  
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },


}));

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  { field: 'text', headerName: 'TEXT', width: 300 },
  { field: 'date', headerName: 'DATE', width: 500}
]

const rows = [
  { id:1, text:'LOCAL RECORD1', date: new Date().toJSON()},
  { id:2, text:'LOCAL RECORD2', date: new Date().toJSON()},
  { id:3, text:'LOCAL RECORD3', date: new Date().toJSON()},
]

function Todo(){

  const classes = useStyles();
  const alert = React.useContext(AlertContext)
  const firebase = React.useContext(FirebaseContext)
  const handleBtnClick = event =>{ 
      event.preventDefault();
      firebase.addNote('TEST TODO').then(()=>{
        alert.show('Record add', 'success', 3000);
      }).catch(()=>{
        alert.show('Error create record', 'error', 3000);
      })
  }      

  React.useEffect(()=>{
    firebase.fetchNotes()
    console.log(firebase.notes)
    // eslint-disable-next-line
  }, [])


  const datagrid = (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={10}/>     
      </div>
  )

  return(
    <React.Fragment>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <h3>TODO</h3>
        {/*<button onClick={handleBtnClick}>ADD TODO</button>*/}
          {firebase.loading 
          ? <Loader /> 
          : <div>
            {datagrid}
          </div>
          }
      </Container>   


    </React.Fragment>
    
  )
} 

export default Todo;