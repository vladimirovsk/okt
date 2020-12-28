import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, CircularProgress} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


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

function Login() {

  const classes = useStyles(); 
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [openLogin, setOpenLogin] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  

  async function handleLogin(props)  {
    //console.log(localStorage.getItem("token"));
    //if (props.isAuth ===true) {
    setLoading(false)
    handleCloseLogin()
    setOpenLogin(false)
    //} else {
    //    setOpenLogin(true)}
}

  const handleCloseLogin = () =>{
    setOpenLogin(false);
  }

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