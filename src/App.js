import React from 'react';
import './App.css';
//import {connect} from 'react-redux';
import Header from "./component/Header/Header";
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/component/UI/Theme'
import { CssBaseline, CircularProgress } from '@material-ui/core';
import firebase from './component/firebase'
import {connect} from 'react-redux'

//PAGES
import Dashboard from './component/pages/Dashboard/Dashboard';
import Houses from './component/pages/Houses/Houses';
import Banking from './component/pages/Banking/Banking';
import Developing from './component/pages/Developing/Developing';
import Logout from './component/Logout/Logout.js'

function App({isAuth}) {
  const [firebaseInit, setFirebaseInit] = React.useState(false);
  console.log("App", isAuth)

  
  
  let routes = (
    <Switch>
      <Route exact path="/"  render={()=><div><h3>Home route</h3></div>}/>
      <Route path="/login" exact={true} render={() =><div><h3>Login route</h3></div>}/>
      <Route path="/dashboard/p404" exact={true} render={() =><Developing />}/>
    <Redirect to={'/'}/>

</Switch>

    );

    if (isAuth){
      routes = (
        <Switch>
              <Route exact path="/"  render={()=><div><h3>Home route</h3></div>}/>
              <Route path="/logout" exact={true} render={() =><Logout />}/>
              <Route path="/dashboard" exact={true} render={() =><Dashboard selected/>}/>
              <Route path="/dashboard/houses" exact={true} render={() =><Houses />}/>
              <Route path="/dashboard/banking" exact={true} render={() =><Banking />}/>
              <Route path="/dashboard/p404" exact={true} render={() =><Developing />}/>
              <Redirect to={'/'}/>
        </Switch>

      )
    }

  React.useEffect(()=>{
     firebase.isInitialized().then(val =>{
      setFirebaseInit(val)
    })
  },)

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
}

function mapStateToProps(state) {
  return {
    isAuth: !!state.auth.token
  }
}

export default connect(mapStateToProps, null)(App);
