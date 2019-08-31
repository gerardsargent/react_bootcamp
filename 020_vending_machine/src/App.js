import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import VendingMachine from './VendingMachine'
import Soda from './Soda'
import Chips from './Chips'
import FreshSardines from './FreshSardines'
import NavBar from './NavBar'


function App() {
  return (
    <div className="App">
      <div className="App_nav-container">
        <NavBar />
      </div>

      <Switch>
        <Route exact path='/' component={VendingMachine} />
        <Route exact path='/soda' component={Soda} />
        <Route exact path='/chips' component={Chips} />
        <Route exact path='/fresh-sardines' component={FreshSardines} />
      </Switch>
    </div>
  );
}

export default App;
