import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'

import Superheroes from './Superheroes'
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/superheroes" component={Superheroes} />
    </Switch>
  );
}

export default App;
