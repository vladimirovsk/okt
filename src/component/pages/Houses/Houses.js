import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core';
import {connect} from 'react-redux';

import {inc, dec, rnd} from '../../../store/actions/counter';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));
function Houses({counter, inc, dec, rnd}){

  const classes = useStyles();

  return(
    <React.Fragment>
       <div className={classes.appBarSpacer} />
      <h3>HOUSES</h3>
      <Typography component='h2' variant='h1'>{counter}</Typography>
      <Button id='inc' variant="contained" color="secondary" className='btn' onClick={inc}>INC</Button>
      <Button id='dec' variant="contained" color="secondary" className='btn' onClick={dec}>DEC</Button>
      <Button id='rnd' variant="contained" color="secondary" className='btn' onClick={rnd}>RND</Button>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    inc: () => dispatch(inc()),
    dec: () => dispatch(dec()),
    rnd: () => {
      const randomValue = Math.floor(Math.random()*10)
      dispatch(rnd(randomValue))
    },
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Houses)