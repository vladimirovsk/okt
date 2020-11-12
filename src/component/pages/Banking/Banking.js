import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

export default function Banking(){
  const classes = useStyles();
  const counter = useSelector(state => state.counter)

  return(
    <React.Fragment>
      <div className={classes.appBarSpacer} />
      <h3>BANKING</h3>
      <h3>{counter}</h3>
    </React.Fragment>
    
  )
}