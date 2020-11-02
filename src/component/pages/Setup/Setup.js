import React from 'react'
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));
function Setup(){

  const classes = useStyles();
  return(
    <React.Fragment>
      <div className={classes.appBarSpacer} />
      <h3>SETUP CONFIGURATION FROM USER</h3>
    </React.Fragment>
    
  )
} 

export default Setup;