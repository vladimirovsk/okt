import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './component/UI/Theme'
//import { CssBaseline, CircularProgress } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import firebase from './component/firebase'


//PAGES
import Setup from './component/pages/Setup/Setup';
import Todo from './component/pages/Todo/Todo';
import Dashboard from './component/pages/Dashboard/Dashboard';
import Houses from './component/pages/Houses/Houses';
import Banking from './component/pages/Banking/Banking';
import Developing from './component/pages/Developing/Developing';
import Logout from './component/Logout/Logout.js'
import MyAlert from './component/MyAlert/MyAlert'

//import { useSelector } from 'react-redux'
import AlertState from './context/alert/alertState';
import {FirebaseState} from './context/firebase/FirebaseState';
import Loader from './component/Loader/Loader'
//import  MyTheme from './component/UI/Theme'

function App() {
  const [firebaseInit, setFirebaseInit] = React.useState(false);
  const isAuth = true;//useSelector(state => state.isAuth = true);
  let routes = "";
  if (!isAuth) {
     routes = (
      <Switch>
        <Route exact path="/" render={() => <div><h3>Home route</h3></div>} />
        <Route path="/dashboard/houses" exact={true} render={() => <Houses />} />
        <Route path="/login" exact={true} render={() => <div><h3>Login route</h3></div>} />
        <Route path="/dashboard/p404" exact={true} render={() => <Developing />} />
        <Redirect to={'/'} />
      </Switch>
    );
  }else{
     routes = (
      <Switch>
        <Route exact path="/" render={() => <div><h3>Home route</h3></div>} />
        <Route path="/logout" exact={true} render={() => <Logout />} />
        <Route path="/dashboard" exact={true} render={() => <Dashboard selected />} />
        <Route path="/dashboard/houses" exact={true} render={() => <Houses />} />
        <Route path="/dashboard/banking" exact={true} render={() => <Banking />} />
        <Route path="/dashboard/p404" exact={true} render={() => <Developing />} />
        <Route path="/todo" exact={true} render={() => <Todo />} />
        <Route path="/setup" exact={true} render={() => <Setup />} />
        <Redirect to={'/'} />
      </Switch>
    )
  }

  React.useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInit(val)
    })
  })
  
  return firebaseInit !== false ? (
    <div className="App">
      <FirebaseState>
      <AlertState>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <MyAlert />
            <Header />
            {routes}
          </CssBaseline>
        </ThemeProvider>
      </AlertState>
      </FirebaseState>
    </div>
  ) : <div id='loader'><Loader /> </div>
}

export default App;
