import React, {useContext} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import { CounterContext } from '../../../context/counter/counterContext';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));
function Setup(){
  const {counter} = useContext(CounterContext);


  const classes = useStyles();
  return(
    <React.Fragment>
      <div className={classes.appBarSpacer} />
      <h3>SETUP CONFIGURATION FROM USER</h3>
      <pre>{JSON.stringify('',null,2)}</pre>
     
      <h3>counter: {counter}</h3>      
    </React.Fragment>
    
  )
} 

export default Setup;