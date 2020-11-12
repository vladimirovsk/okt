import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';

import {inc, dec} from '../../../store/actions/counter';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));
function Houses(){

  const classes = useStyles();
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)

  //console.log({inc});
  return(
    <React.Fragment>
       <div className={classes.appBarSpacer} />
      <h3>HOUSES</h3>
      <Typography component='h2' variant='h1'>{counter}</Typography>
      
      <Button id='dec' variant="contained" color="secondary" className='btn' onClick={(()=>dispatch(dec))}>DEC</Button>
      &nbsp;
      <Button id='inc' variant="contained" color="secondary" className='btn' onClick={(()=>dispatch(inc))}>INC</Button>
    </React.Fragment>
  )
}
export default Houses