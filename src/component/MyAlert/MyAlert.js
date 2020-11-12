import React from 'react';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles} from '@material-ui/core/styles';
import AlertContext from '../../context/alert/alertContext'; 


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
      zIndex: 3000
    },
  },
}));

/**
 * component for output messages from users
 * sending from context
 */
export default function MyAlert () {

  const classes = useStyles();
  
 
  const {alert, hide} = React.useContext(AlertContext)
    
  if (!alert )  return null;

  
  return (
      <Snackbar 
            className={classes.root} open={true} 
            autoHideDuration={alert.autoHide} 
            onClose={hide}>
      <Alert 
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={hide}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      variant="filled" 
      //variant="outlined"
      severity={alert.type} >
        <AlertTitle>{alert.type}</AlertTitle>  
        {alert.text}
      </Alert>
      </Snackbar>   
  )
}