import React from 'react';
import clsx from 'clsx';
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, CssBaseline} from '@material-ui/core';
import {Collapse, Toolbar, Typography, IconButton} from '@material-ui/core';
//import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from "@material-ui/core";


import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ViewListIcon from '@material-ui/icons/ViewList';
import NoteIcon from '@material-ui/icons/Note';


//Import my component
import firebase from '../../component/firebase';

import {auth} from '../../store/actions/auth';

//import { SettingsSystemDaydreamOutlined } from '@material-ui/icons';
//import logo from '../../assets/logo.png'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },

    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuButtonHidden: {
        display: 'none',
      },

    hide: {
        display: 'none',
      },

      title: {
        flexGrow: 1,
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },

    drawerPaper: {
        width: drawerWidth,
      },

    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },

    textField: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },

        backgroundColor: '#fff', //theme.palette.common.primary''
        paddingTop: theme.spacing(1),
      },
      directory: {
        paddingLeft: theme.spacing(4),
      },

}));



const Header = (props, {isAuth}) => {
    const classes = useStyles();
    const theme = useTheme();    
    //const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const [openPanel, setOpenPanel] = React.useState(false);
    const [openLogin, setOpenLogin] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(false);
    const [openDirectory, setOpenDirectory] = React.useState(false); //Открытые директории справочников
    const [openReport, setOpenReport] = React.useState(false);
    const open = Boolean(anchorEl);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    React.useEffect(()=>{
        setOpenLogin(!props.isAuth)
        console.log("Handle useEffect", props.isAuth)
    }, [props.isAuth])
    
    async function onLogin(){
        try{
            await firebase.login(email,password);
            props.history.replace('/dashboard');
            handleCloseLogin();
        }catch(error){
            alert(error.message)
        }
    }

    function handleLogin()  {
        props.auth(email, password, true) 
        if (props.isAuth ===true) {
            handleCloseLogin()
        } else {
            setOpenLogin(true)}
    }

    const habdleCloseMenu =() =>{
        setAnchorEl();
    }

    const handleMenu =(event) =>{
        setAnchorEl(event.currentTarget);
    }

    const handlePanel = () => {
        setOpenPanel(!openPanel);
    };

    const handleCloseLogin = () =>{
        setOpenLogin(false);
    }

    const handleOpenLogin = () =>{
        habdleCloseMenu();
        setOpenLogin(true);
    }

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        switch(index){
            case 0: {props.history.replace('/dashboard'); break;}
            case 1: {props.history.replace('/dashboard/houses'); break;}
            case 2: {props.history.replace('/dashboard/banking'); break;}
            default: {props.history.replace('/dashboard/p404'); break;}
        }
      };

    const handleDirectory =() =>{
        setOpenDirectory(!openDirectory);
    }  

    const handleReport = () => {
        setOpenReport(!openReport);
    }

    const dialog =(
        <Dialog     open={openLogin}
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
                            color="secondary" 
                            variant="outlined"
                            >

                            {"Cancel"}
                    </Button>
                    <Button disabled={false}
                            onClick={handleLogin}
                            color="secondary" 
                            variant="outlined">

                            {"Login"}
                    </Button>
                </DialogActions>
                
            </Dialog>
    )


    const drawer =(
        <React.Fragment>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={openPanel}
            classes={{
            paper: classes.drawerPaper,
            }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handlePanel}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem  
                selected={selectedIndex === 0}
                button key="Dashboard" 
                onClick={(event)=>handleListItemClick(event, 0)}
                >
                <ListItemIcon><DashboardIcon></DashboardIcon></ListItemIcon>
                <ListItemText primary={'Dashboard'} />
            </ListItem>
            <ListItem 
                selected={selectedIndex === 1} 
                button key="Homes" 
                onClick={(event)=>handleListItemClick(event, 1)}
                >
                <ListItemIcon><HomeIcon></HomeIcon></ListItemIcon>
                <ListItemText primary={'Houses'} />
            </ListItem>
            <ListItem  
                selected={selectedIndex === 2}
                button key="Banking"
                onClick={(event)=>handleListItemClick(event, 2)}
                > 
                <ListItemIcon><AccountBalanceIcon></AccountBalanceIcon></ListItemIcon>
                <ListItemText primary={'Banking'} />
            </ListItem>
            <ListItem
                button key="Directories"
                selected={selectedIndex === 3} 
                onClick={handleDirectory}>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Directories" />
                {openDirectory ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {/* ////////////////////////////////
             *
             */}   
            <Collapse in={openDirectory} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem 
                    selected={selectedIndex === 31} 
                    button className={classes.directory}
                    onClick={(event)=>handleListItemClick(event, 31)}
                >    
                    <ListItemIcon>
                    <ViewListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Street" />
                </ListItem>
                </List>
            </Collapse>
        </List>
        <Divider />
        <ListItem 
            selected={selectedIndex === 4}
            button key="Reports"
            onClick={((event)=>handleListItemClick(event, 4), handleReport)}
            > 
            <ListItemIcon><EventNoteIcon></EventNoteIcon></ListItemIcon>
            <ListItemText primary={'Reports'} />
            {openReport ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
            <Collapse in={openReport} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem 
                    selected={selectedIndex === 41}
                    onClick={(event)=>handleListItemClick(event, 41)} 
                    button className={classes.directory}
                >
                    <ListItemIcon>
                    <NoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="report 1" />
                </ListItem>
                <ListItem 
                    selected={selectedIndex === 42}
                    onClick={(event)=>handleListItemClick(event, 42)} 
                    button className={classes.directory}
                >
                    <ListItemIcon>
                    <NoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="report 2" />
                </ListItem>
                </List>
            </Collapse>
        <ListItem  
            selected={selectedIndex === 5} 
            button key="Setting"
            onClick={(event)=>handleListItemClick(event, 5)}
            >  
            <ListItemIcon><SettingsIcon></SettingsIcon></ListItemIcon>
            <ListItemText primary={'Setting'} />
        </ListItem>
      </Drawer>
      <main className={classes.content}>
        
      </main>
      
      </React.Fragment>
    )

    return(
        <div className={classes.root}>
            <CssBaseline />
                <AppBar position="fixed" className={clsx(classes.appBar, {
                                                [classes.appBarShift]: openPanel,
                                            })}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            onClick={handlePanel}
                            className={clsx(classes.menuButton, open && classes.hide)}
                            color="inherit"
                            aria-label="open drawer"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title} noWrap>
                            OKT
                        </Typography>
                    
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }} 
                            open={open}
                            onClose={habdleCloseMenu}
                        >
                            <MenuItem onClick={null}>Profile</MenuItem>
                            <hr/>
                            <MenuItem onClick={handleOpenLogin}>{props.isAuth ?'Logout': 'Login'}</MenuItem>
                            
                        </Menu>

                    </Toolbar>

                </AppBar>
                {drawer}
                
                {dialog}
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
    }
}

function mapStateToProps(state) {
    return {
        isAuth: !!state.auth.token
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
/*
    <Button hidden={true} component={Link} to="/" onClick={()=>setSelectedIndex(1)}
            disableRipple
            className={classes.logoContainer}>
        <img alt="logo" src={logo} className={classes.logo} />
    </Button>
*/
