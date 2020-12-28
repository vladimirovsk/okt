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

import { UserContext } from './context/user/userContext';
import { CounterContext } from './context/counter/counterContext';
//import Loader from './component/Loader/Loader'
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
            <UserContext.Provider value={value}>
            {!isAuth ? <Login openned='true'/> : <Header />}
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
