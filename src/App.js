import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/component/UI/Theme'

function App() {
    const routes = (
        <Switch>
            <Route exact path="/"  render={()=><div><h3>Home route</h3></div>}/>
            <Route path="/login" exact={true} render={() =><div><h3>Login route</h3></div>}/>
            <Route path="/logout" exact={true} render={() =><div><h3>logout route</h3></div>}/>
            <Route path="/dashboard" exact={true} render={() =><div><h3>logout dashboard</h3></div>}/>
            <Redirect to={'/'}/>
        </Switch>
    )
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <Header />
          {routes}
        </ThemeProvider>
    </div>
  );
}

export default App;
