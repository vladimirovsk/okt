import React, {useState, useMemo} from 'react';
import './App.css';
import Header from "./component/Header/Header";
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './component/UI/Theme'
import { CssBaseline } from '@material-ui/core';

//PAGES
import Setup from './component/pages/Setup/Setup';
import Todo from './component/pages/Todo/Todo';
import Dashboard from './component/pages/Dashboard/Dashboard';
import Houses from './component/pages/Houses/Houses';
import Banking from './component/pages/Banking/Banking';
import Developing from './component/pages/Developing/Developing';
import Logout from './component/Logout/Logout.js'
import MyAlert from './component/MyAlert/MyAlert'

<<<<<<< HEAD
import { useSelector } from 'react-redux'
import AlertState from './context/alert/alertState';
import {FirebaseState} from './context/firebase/FirebaseState';
import Loader from './component/Loader/Loader'
import Home from './component/pages/Home/Home'
=======
import AlertState from './context/alert/alertState';
import Login from "./component/Login/Login"

import { UserContext } from './context/user/userContext';
import { CounterContext } from './context/counter/counterContext';
//import Loader from './component/Loader/Loader'
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
//import  MyTheme from './component/UI/Theme'
 function App(props) {
  const isAuth = localStorage.getItem('isAuth');///props.isAuth;
  const [authUser, setAuthUser] = useState(null);
  const [counter, setCounter] = useState(0);
  
  const counterM = useMemo(()=>({counter, setCounter}), [counter, setCounter]);
  const value = useMemo(()=>({authUser, setAuthUser}), [authUser, setAuthUser]);

  React.useEffect(()=>{
    
    if (!isAuth) {
      console.log('isAuth', isAuth);
      setAuthUser(null)
    }

  },[isAuth])

<<<<<<< HEAD
function App() {
  const [firebaseInit, setFirebaseInit] = React.useState(false);
  const isAuth = useSelector(state => state.isAuth = false);
=======
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
  let routes = "";
  
  if (!isAuth) {
     routes = (
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" render={() => <Home />} />
        {/*<Route path="/dashboard/houses" exact={true} render={() => <Houses />} />
        <Route path="/login" exact={true} render={() => <div><h3>Login route</h3></div>} />
        <Route path="/dashboard/p404" exact={true} render={() => <Developing />} />
     <Redirect to={'/'} />*/}

=======
        <Route path="/"                 exact={true} render={() => <div />} />
        {/* <Route path="/dashboard/houses" exact={true} render={() => <Houses />} />
        <Route path="/login"            exact={true} render={() => <div><h3>Login route</h3></div>} />
        <Route path="/dashboard/p404"   exact={true} render={() => <Developing />} /> */}
        <Redirect to={'/'} />
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
      </Switch>
    );
  }else{
     routes = (
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" render={() =>  <Home />} />
        <Route path="/logout" exact={true} render={() => <Logout />} />
        <Route path="/dashboard" exact={true} render={() => <Dashboard selected />} />
        <Route path="/dashboard/houses" exact={true} render={() => <Houses />} />
        <Route path="/dashboard/banking" exact={true} render={() => <Banking />} />
        <Route path="/dashboard/p404" exact={true} render={() => <Developing />} />
        <Route path="/todo" exact={true} render={() => <Todo />} />
        <Route path="/setup" exact={true} render={() => <Setup />} />
=======
        <Route path="/"                   exact={true} render={() => <Dashboard selected />} />
        <Route path="/logout"             exact={true} render={() => <Logout />} />
        <Route path="/dashboard"          exact={true} render={() => <Dashboard selected />} />
        <Route path="/dashboard/houses"   exact={true} render={() => <Houses />} />
        <Route path="/dashboard/banking"  exact={true} render={() => <Banking />} />
        <Route path="/dashboard/p404"     exact={true} render={() => <Developing />} />
        <Route path="/todo"               exact={true} render={() => <Todo />} />
        <Route path="/setup"              exact={true} render={() => <Setup />} />
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
        <Redirect to={'/'} />
      </Switch>
    )
  }

    //return firebaseInit !== false ? () : <div id='loader'><Loader /> </div>  
  return (
    <div className="App">
      <AlertState>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            
            <MyAlert />
<<<<<<< HEAD
            { isAuth ? <Header title={String(isAuth)} />:  <div>{String(isAuth)}</div>}
=======
            <CounterContext.Provider value={counterM}>
            <UserContext.Provider value={value}>
            {!isAuth ? <Login openned='true'/> : <Header />}
>>>>>>> d74a48f1e53d0f51bced622da372c178288ff430
            {routes}
            </UserContext.Provider>
            </CounterContext.Provider>

          </CssBaseline>
        </ThemeProvider>
      </AlertState>
    </div>
  )
}

export default App;
