import React from 'react';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

export default function Banking(){
  const classes = useStyles();

  return(
    <React.Fragment>
      <div className={classes.appBarSpacer} />
      <h3>BANKING</h3>
    </React.Fragment>
    
  )
}