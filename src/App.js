import React from 'react';
import Homepage from './views/HomePage/Homepage';
import About from './views/About/About';
import ContactUs from './views/ContactUs/ContactUs';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Homepage}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contactus" component={ContactUs}/>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
