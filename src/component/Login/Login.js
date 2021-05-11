import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, CircularProgress} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { LoginContext } from '../../context/login/loginContext';


const useStyles = makeStyles((theme) => ({
  textField: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    hide: {
      display: 'none',
    },
    //backgroundColor: '#fff', //theme.palette.common.primary''
    paddingTop: theme.spacing(1)
  }
}));

function Login(props) {

  const {openLogin, setOpenLogin} = useContext(LoginContext);

  const classes = useStyles(); 
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  console.log('props', props);
  

  async function handleLogin(props)  {
    
    //if (props.isAuth ===true) {
    setLoading(false)
    handleCloseLogin()
    //} else {
    //    setOpenLogin(true)}
}

  const handleCloseLogin = () =>{
    setOpenLogin(false);
  }

  // console.log('LOGIN FORM', openLogin);
  // console.log('LOGIN FORM', openned);
  return (
    <Dialog open={openLogin}
    onClose={handleCloseLogin}
    disableBackdropClick
    disableEscapeKeyDown
    maxWidth="xs"
    onEntering={null}
    aria-labelledby="confirmation-dialog-title"
    aria-describedby="confirmation-dialog-description"
    >            
    <DialogTitle id="confirmation-dialog-title">{"Login"}</DialogTitle>
    <DialogContent dividers>
    <DialogContentText id="confirmation-dialog-description">   
    </DialogContentText>
    <TextField
        className={classes.textField}
        id="login"
        label={'Enter your email'}
        margin="dense"
        type="email"
        //autoComplete="current-email"
        //variant="outlined"
        fullWidth
        value={email}
        onChange={e => setEmail(e.target.value)}
        
    />
    <TextField
        className={classes.textField}
        //disabled={false}
        autoFocus
        margin="dense"
        id="password"
        label={'Enter your password'}
        type="password"
        //autoComplete="current-password"
        //variant="outlined"
        fullWidth
        value={password}
        onChange={e => setPassword(e.target.value)}
    />
</DialogContent>

<DialogActions>
    <Button onClick={handleCloseLogin}
            //color="secondary" 
            variant="outlined"
            >
            {"Cancel"}
    </Button>
    <Button disabled={false}
            onClick={(event) => handleLogin(event)}
            //color="secondary" 
            variant="outlined">
            {"Login"}
            {loading && <CircularProgress disableShrink size={24} className={classes.buttonProgress}/>}
    </Button>
    

</DialogActions>

{/*
    return firebaseInit !== false ? (
    
        <div className="App">
            <ThemeProvider theme={theme}>
            <CssBaseline>
                <Header />
                {routes}
            </CssBaseline>
            </ThemeProvider>
        </div>

    ):<div id='loader'><CircularProgress /> </div>
*/}

</Dialog>
  )
}


export default Login;