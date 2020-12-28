import React, {useContext} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core';
import {CounterContext} from '../../../context/counter/counterContext'


const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

function Houses(){
  const {counter, setCounter} = useContext(CounterContext);
  const classes = useStyles();
  
  const addCounter = () =>{
    setCounter(counter+1)
  }

  const decCounter = () =>{
    setCounter(counter-1)
  }
  
  return(
    <React.Fragment>
       <div className={classes.appBarSpacer} />
      <h3>HOUSES</h3>
      <Typography component='h2' variant='h2'>{counter}</Typography>
      <Button id='dec' variant="contained" color="secondary" className='btn' onClick={addCounter}>INC</Button>
      &nbsp;
      <Button id='inc' variant="contained" color="secondary" className='btn' onClick={decCounter}>DEC</Button>
      <hr/>
     
      

  
    </React.Fragment>
  )
}

export default Houses