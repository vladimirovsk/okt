import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core'
//import AlertContext from '../../../context/alert/alertContext'
<<<<<<< HEAD
import Loader from '../../Loader/Loader';
=======
//import Loader from '../../Loader/Loader';
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
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
  // const handleBtnClick = event =>{ 
  //     event.preventDefault();
  //     firebase.addNote('TEST TODO').then(()=>{
  //       alert.show('Record add', 'success', 3000);
  //     }).catch(()=>{
  //       alert.show('Error create record', 'error', 3000);
  //     })
  // }      

  React.useEffect(()=>{
<<<<<<< HEAD
     
      console.log("notes", 'NONE')
=======
      
    
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
  }, [])

  

  return(
    <React.Fragment>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <h3>TODO</h3>
<<<<<<< HEAD
        {/*<button onClick={handleBtnClick}>ADD TODO</button>
          {loading 
          ? <Loader /> 
          : <div>
          {notes}
          </div>
          }*/}
=======
        {/*<button onClick={handleBtnClick}>ADD TODO</button>*/}
          {/*loading 
          ? <Loader /> 
          : <div>
            {notes}
          </div>*/
          }
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
      </Container>   


    </React.Fragment>
    
  )
} 

export default Todo;