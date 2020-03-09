import React from 'react';
import Homepage from './views/Homepage';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Homepage}/>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
