import React from 'react';
import clsx from 'clsx';
import {withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, CssBaseline} from '@material-ui/core';
import {Collapse, Toolbar, Typography, IconButton} from '@material-ui/core';
<<<<<<< HEAD
//import useMediaQuery from "@material-ui/core/useMediaQuery";
=======
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ViewListIcon from '@material-ui/icons/ViewList';
import NoteIcon from '@material-ui/icons/Note';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
//import { useSelector} from 'react-redux';
//import {useContext} from 'react';
//import {Context} from '../../context'
//Import my component
import Login from '../Login/Login';
//import { SettingsSystemDaydreamOutlined } from '@material-ui/icons';
//import logo from '../../assets/logo.png'
const drawerWidth = 240;
//const nodeEnv = process.env.NODE_ENV;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        //paddingRight: 24, // keep right padding when drawer closed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },

      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
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


    hide: {
        display: 'none',
      },

      title: {
        flexGrow: 1,
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
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

    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        //transition: theme.transitions.create('margin', {
        //  easing: theme.transitions.easing.sharp,
        //  duration: theme.transitions.duration.leavingScreen,
        //}),
        //marginLeft: -drawerWidth,
        
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
      directory: {
        paddingLeft: theme.spacing(4),
      },
      buttonProgress: {
        color: '#5DADE2',  
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },

}));
<<<<<<< HEAD


const Header = (props) => {
    const classes = useStyles();
   //const theme = useTheme();  
=======
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430

const Header = (props) => {
    const classes = useStyles(); 
    
    //const matches = useMediaQuery(theme.breakpoints.down("sm"));
<<<<<<< HEAD
=======
    //const [loading, setLoading] = React.useState(false); //Для отображения статуса загрузки логина
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
    //const type = useContext(Context);
    const [openPanel, setOpenPanel] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(false);
    const [openDirectory, setOpenDirectory] = React.useState(false); //Открытые директории справочников
    const [openReport, setOpenReport] = React.useState(false);
    const open = Boolean(anchorEl);
<<<<<<< HEAD

=======
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const isAuth = false;//useSelector(state => state.isAuth)

    React.useEffect(()=>{
        setSelectedIndex(selectedIndex);
<<<<<<< HEAD
=======
        //console.log(selectedIndex);
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
       // setOpenLogin(!props.isAuth)
        //if (openPanel && !props.isAuth){
        //    setOpenPanel(false)
        //}
        //console.log("Handle useEffect", props.isAuth)
    }, [selectedIndex])
    
<<<<<<< HEAD
    // async function onLogin(){
    //     try{
    //         await firebase.login(email,password);
    //         props.history.replace('/dashboard');
    //         handleCloseLogin();
    //     }catch(error){
    //         alert(error.message)
    //     }
    // }

    const habdleCloseMenu =() =>{
=======

    const handleCloseMenu =() =>{
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
        setAnchorEl();
    }

    const handleMenu =(event) =>{
        setAnchorEl(event.currentTarget);
    }

    const handleDrawerOpen = () => {
        setOpenPanel(!openPanel);
        };                

<<<<<<< HEAD

=======
    const handleOpenLogin = () =>{
        if (!props.isAuth) {
            handleCloseMenu();
        } else {
            //setOpenLogin(true);
            //props.isAuth = false;
        }
    }
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        switch(index){
            case 0: {props.history.replace('/dashboard'); break;}
            case 1: {props.history.replace('/todo'); break;}
            case 2: {props.history.replace('/dashboard/houses'); break;}
            case 3: {props.history.replace('/dashboard/banking'); break;}
            case 41: {props.history.replace('/directoris/street'); break;}
            case 51: {props.history.replace('/report/report1'); break;}
            case 6: {props.history.replace('/setup'); break;}
            default: {props.history.replace('/dashboard/p404'); break;}
        }
      };

    const handleDirectory =() =>{
        setOpenDirectory(!openDirectory);
    }  

    const handleReport = () => {
        setOpenReport(!openReport);
    }

    const drawer =(
        <React.Fragment>
        <Drawer
            variant="permanent"

            className={clsx(classes.drawer, {
                [classes.drawerOpen]: openPanel,
                [classes.drawerClose]: !openPanel
            })}

            classes={{
            paper: clsx({
                [classes.drawerOpen]: openPanel,
                [classes.drawerClose]: !openPanel
            }),
            }} 
      >
        <div className={classes.toolbar}>

           {/* <IconButton onClick={handlePanel}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>*/}
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
                button key="ToDo" 
                onClick={(event)=>handleListItemClick(event, 1)}
                >
                <ListItemIcon><LibraryAddCheckIcon></LibraryAddCheckIcon></ListItemIcon>
                <ListItemText primary={'Todo'} />

            </ListItem>
            <ListItem 
                selected={selectedIndex === 2} 
                button key="Houses" 
                onClick={(event)=>handleListItemClick(event, 2)}
                >
                <ListItemIcon><HomeIcon></HomeIcon></ListItemIcon>
                <ListItemText primary={'Houses'} />
            </ListItem>
            <ListItem  
                selected={selectedIndex === 3}
                button key="Banking"
                onClick={(event)=>handleListItemClick(event, 3)}
                > 
                <ListItemIcon><AccountBalanceIcon></AccountBalanceIcon></ListItemIcon>
                <ListItemText primary={'Banking'} />
            </ListItem>
            <ListItem
                button key="Directories"
                selected={selectedIndex === 4} 
                onClick={(event)=> {
                    handleListItemClick(event ,4); 
                    handleDirectory();
                }}>
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
                    selected={selectedIndex === 41} 
                    button className={classes.directory}
                    onClick={(event)=>handleListItemClick(event, 41)}
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
            selected={selectedIndex === 5}
            button key="Reports"
            onClick={(event)=>{
                handleListItemClick(event, 5);
                handleReport();
            }}> 
            <ListItemIcon><EventNoteIcon></EventNoteIcon></ListItemIcon>
            <ListItemText primary={'Reports'} />
            {openReport ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
            <Collapse in={openReport} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem 
                    selected={selectedIndex === 51}
                    onClick={(event)=>handleListItemClick(event, 51)} 
                    button className={classes.directory}
                >
                    <ListItemIcon>
                    <NoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="report 1" />
                </ListItem>
                <ListItem 
                    selected={selectedIndex === 52}
                    onClick={(event)=>handleListItemClick(event, 52)} 
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
            selected={selectedIndex === 6} 
            button key="Setup"
            onClick={(event)=>handleListItemClick(event, 6)}
            >  
            <ListItemIcon><SettingsIcon></SettingsIcon></ListItemIcon>
            <ListItemText primary={'Setup'} />
        </ListItem>
      </Drawer>
      
      </React.Fragment>
    )
    return(
        <div className={classes.root}>
            <CssBaseline />
                <AppBar 
                    position="fixed" 
                    className={clsx(classes.appBar, {
                                                [classes.appBarShift]: openPanel,
                                            })}>

                    <Toolbar>
                        <IconButton 
                            edge="start"
                            onClick={isAuth ? handleDrawerOpen : handleDrawerOpen }
                            //onClick = {handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.hide)}
                            color="inherit"
                            aria-label="open drawer"
                        >
                        <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title} noWrap>
<<<<<<< HEAD
                            AUTH={props.title}<br/>
                            CRM&nbsp;mode:
=======
                            CRM&nbsp;mode:{nodeEnv}
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
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
                            onClose={handleCloseMenu}
                        >
                            <MenuItem onClick={null}>Profile</MenuItem>
                            <hr/>
                            <MenuItem onClick={null}>{props.isAuth ?'Logout': 'Login'}</MenuItem>
                            
                        </Menu>
                    </Toolbar>
                </AppBar>
                {drawer}
                <Login />
                <main className={classes.content}>
<<<<<<< HEAD
                </main>
=======
                </main> 
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
        </div>
    )
}

export default (withRouter(Header));
/*
    <Button hidden={true} component={Link} to="/" onClick={()=>setSelectedIndex(1)}
            disableRipple
            className={classes.logoContainer}>
        <img alt="logo" src={logo} className={classes.logo} />
    </Button>
*/
