import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/component/UI/Theme'
import { CssBaseline, CircularProgress } from '@material-ui/core';
import firebase from './component/firebase'
function App() {

  const [firebaseInit, setFirebaseInit] = React.useState(false);
  
  const routes = (

        <Switch>
            <Route exact path="/"  render={()=><div><h3>Home route</h3></div>}/>
            <Route path="/login" exact={true} render={() =><div><h3>Login route</h3></div>}/>
            <Route path="/logout" exact={true} render={() =><div><h3>logout route</h3></div>}/>
            <Route path="/dashboard" exact={true} render={() =><div><h3>logout dashboard</h3></div>}/>
            <Redirect to={'/'}/>
        </Switch>
    )

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

export default App;
