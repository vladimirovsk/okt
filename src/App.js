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

import AlertState from './context/alert/alertState';
import Login from "./component/Login/Login"

import { CounterContext } from './context/counter/counterContext';
import { LoginContext } from './context/login/loginContext';
//import Loader from './component/Loader/Loader'
//import  MyTheme from './component/UI/Theme'
 function App(props) {
  let isAuth = false; // localStorage.getItem('isAuth');///props.isAuth;
  const [counter, setCounter] = useState(0);
  const [openLogin, setOpenLogin] = useState(false);
  
  const counterM = useMemo(()=>({counter, setCounter}), [counter, setCounter]);
  const login = useMemo(()=>({openLogin, setOpenLogin}), [openLogin, setOpenLogin]);
    

  const handleLogin = () => {
    setOpenLogin(!openLogin);
    isAuth=!openLogin;
  }

  let routes = "";
  
  if (!isAuth) {
     routes = (
      <Switch>
        <Route path="/"                 exact={true} render={() => <div />} />
        {/* <Route path="/dashboard/houses" exact={true} render={() => <Houses />} />
        <Route path="/login"            exact={true} render={() => <div><h3>Login route</h3></div>} />
        <Route path="/dashboard/p404"   exact={true} render={() => <Developing />} /> */}
        <Redirect to={'/'} />
      </Switch>
    );
  }else{
     routes = (
      <Switch>
        <Route path="/"                   exact={true} render={() => <Dashboard selected />} />
        <Route path="/logout"             exact={true} render={() => <Logout />} />
        <Route path="/dashboard"          exact={true} render={() => <Dashboard selected />} />
        <Route path="/dashboard/houses"   exact={true} render={() => <Houses />} />
        <Route path="/dashboard/banking"  exact={true} render={() => <Banking />} />
        <Route path="/dashboard/p404"     exact={true} render={() => <Developing />} />
        <Route path="/todo"               exact={true} render={() => <Todo />} />
        <Route path="/setup"              exact={true} render={() => <Setup />} />
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
            <CounterContext.Provider value={counterM}>     
            <LoginContext.Provider value={login}>    
              <Header />
              <Login openned={true} />
              {routes}
            </LoginContext.Provider>
            </CounterContext.Provider>
          </CssBaseline>
        </ThemeProvider>
      </AlertState>
    </div>
  )
}

export default App;
