import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
//import logo from '../../assets/logo.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    tabContainer:{
        marginLeft:'auto',
    },

    tab:{
        ...theme.typography.tab,
        minWidth:10,
        marginLeft:'25px',
        "&:hover":{
            color: "black"
        }
    },

    drawerIcon:{
        height: '30px',
        width: '30px',

    },
    drawerIconContainer:{
        marginLeft:"auto",
        "&:hover": {
            backgroundColor:"transparent",
            borderColor:"transparent"
        }
    },
    drawer:{
        backgroundColor: theme.palette.common.primary,

    },
    drawerItem:{
        ...theme.typography.tab,
        opacity: 0.5

    },

    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1
        }
    },

}));

const Header = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("sm"));


    const [value, setValue] = React.useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openPanel, setOpenPanel] = React.useState(false);
    const [openLogin, setOpenLogin] = React.useState(true);
    const [isAuth, setAuth] = React.useState(false);

    //const [selectedIndex, setSelectedIndex] = React.useState(1);


    const handlePanelOpen = () => {
        setOpenPanel(true);
    };

    //const handlePanelClose = () => {
    //    setOpenPanel(false);
    //};

    const handleCloseLogin = () =>{
        setOpenLogin(false);
    }

    const handleAuth =(set=false) =>{
        setAuth(set)
    }

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose = {()=> {setOpenDrawer(false)}}
                onOpen ={()=> {setOpenDrawer(true)}}
                classes = {{paper: classes.drawer}}
            >
                <div className={classes.toolbarMarginDrawer} />
                <List disablePadding>
                    <ListItem
                        divider button component={Link} to="/"
                        onClick={()=>{setOpenDrawer(false); setValue(0)}}
                        selected={value===0}
                        classes={{selected: classes.drawerItemSelected}}
                    >
                        <ListItemText className={classes.drawerItem}
                                      disableTypography>Home</ListItemText>
                    </ListItem>
                    <ListItem classes={{selected: classes.drawerItemSelected}} divider button component={Link} to="/dashboard" onClick={()=>{setOpenDrawer(false); setValue(1)}} selected={value===1}>
                        <ListItemText className={classes.drawerItem }
                                      disableTypography>Dashboard</ListItemText>
                    </ListItem>
                    <ListItem classes={{selected: classes.drawerItemSelected}} divider button component={Link} to="/login" onClick={()=>{setOpenDrawer(false); setValue(2)}} selected={value===2}>
                        <ListItemText className={classes.drawerItem }
                                      disableTypography>{isAuth ? 'Logout' :'Login'}</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton
                className={classes.drawerIconContainer}
                onClick={()=> setOpenDrawer(!openDrawer)}
                disableRipple>
                <MenuIcon
                    className={classes.drawerIcon}
                />
            </IconButton>
        </React.Fragment>
    )

    const tabs = (
        <Tabs
            aria-label="simple tabs example"
            className={classes.tabContainer}
            value={value}
            onChange={null}
            indicatorColor="secondary"
            scrollButtons="auto"
        >
            <Tab
                className={classes.tab}
                selected ={value === 0}
                component={Link}
                to='/'
                label={"Home"}
                onClick={()=>setValue(0)}
            />


            <Tab
                className={classes.tab}
                selected ={value === 1}
                component={Link}
                to='/dashboard'
                label={"Dashboard"}
                onClick={()=>setValue(1)}
            />


            <Tab
                className={classes.tab}
                selected ={value === 2}
                component={Link}
                to='/login'
                label={"Login"}
                onClick={()=>(setValue(2), setOpenLogin(true) )}
            />

        </Tabs>
    );





    return(
        <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <div hidden={matches}>
                        <IconButton
                            edge="start"
                            onClick={handlePanelOpen}
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        </div>
                        <Typography variant="h6" className={classes.title}>
                            Welcome
                        </Typography>
                        {matches ? drawer : tabs}
                        {/*<Button color="inherit">Login</Button>*/}

                    </Toolbar>
                </AppBar>
            <Dialog open={openLogin} onClose={handleCloseLogin}
                    disableBackdropClick
                    disableEscapeKeyDown
                    maxWidth="xs"
                    onEntering={null}
                    aria-labelledby="confirmation-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Login</DialogTitle>

                <DialogContent>
                    <DialogContentText>

                    </DialogContentText>
                    <TextField
                        //className={classes.textField}
                        id="login"
                        label='enter your email'
                        //margin="dense"
                        type="email"
                        //autoComplete="current-email"
                        //variant="outlined"
                        fullWidth
                    />
                    <TextField
                        //className={classes.textField}
                        //disabled={false}
                        //autoFocus
                        //margin="dense"
                        id="password"
                        label='enter your password'
                        type="password"
                        //autoComplete="current-password"
                        //variant="outlined"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleCloseLogin}
                        color="secondary" variant="outlined">
                        Cancel
                    </Button>
                    <Button disabled={true}
                            onClick={handleCloseLogin}
                            color="secondary" variant="outlined">
                        Login
                    </Button>

                </DialogActions>
            </Dialog>
        </React.Fragment>

    )
}

export default Header;

/*
                        <Button hidden={true} component={Link} to="/" onClick={()=>setSelectedIndex(1)}
                                disableRipple
                                className={classes.logoContainer}>
                            <img alt="logo" src={logo} className={classes.logo} />
                        </Button>
*/
