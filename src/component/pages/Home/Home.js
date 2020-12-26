import React  from 'react';
import {useSelector} from 'react-redux'
import {Dialog, DialogTitle,DialogContent, DialogContentText, 
    CircularProgress, TextField, DialogActions, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
    textField: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },

        //backgroundColor: '#fff', //theme.palette.common.primary''
        paddingTop: theme.spacing(1),
      }
}))

const Home = (props) => {


    const classes = useStyle();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const isAuth = useSelector(state => state.isAuth)
    
    
    console.log('HOME', isAuth)

    async function handleLogin()  {
    }
    return (
        <React.Fragment>
            <Dialog open={!isAuth}
                    onClose={null}
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
                    <Button onClick={null}
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
        </React.Fragment>
    )

}

export default Home;