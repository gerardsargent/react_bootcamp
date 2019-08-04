import React from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom'

import VendingMachine from './VendingMachine'
import Soda from './Soda'
import Chips from './Chips'
import FreshSardines from './FreshSardines'


function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <NavLink exact activeClassName='App__link--active' to='/'>
          Vending Machine
        </NavLink>
        <NavLink exact activeClassName='App__link--active' to='/soda'>
          Soda
        </NavLink>
        <NavLink exact activeClassName='App__link--active' to='/fresh-sardines'>
          Fresh Sardines
        </NavLink>
      </nav>

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
