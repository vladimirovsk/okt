import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Header from "./component/Header/Header";
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './component/UI/Theme'
//import { CssBaseline, CircularProgress } from '@material-ui/core';
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
//import Loader from './component/Loader/Loader'
//import  MyTheme from './component/UI/Theme'

function App() {
  const isAuth = false;// React.useSelector(state => state.isAuth = true);
  let routes = "";
  console.log('AUTH=',isAuth);
  if (!isAuth) {
     routes = (
      <Switch>
        <Route path="/"                 exact={true} render={() => <div><h3>Home route</h3></div>} />
        <Route path="/dashboard/houses" exact={true} render={() => <Houses />} />
        <Route path="/login"            exact={true} render={() => <div><h3>Login route</h3></div>} />
        <Route path="/dashboard/p404"   exact={true} render={() => <Developing />} />
        <Redirect to={'/'} />
      </Switch>
    );
  }else{
     routes = (
      <Switch>
        <Route path="/"                   exact={true} render={() => <div><h3>Home route</h3></div>} />
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
        <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <MyAlert />
            <Header />
            {routes}
          </CssBaseline>
        </ThemeProvider>
        </Provider>
      </AlertState>
    </div>
  )
}

export default App;
