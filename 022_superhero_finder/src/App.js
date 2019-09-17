import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/superheroes"
            // render={routeProps => <Food {...routeProps} />} // Type in any URL in the address bar
            // render={routeProps => <Food name="pudding" routeProps={routeProps.match.params.name} />} // Add the URL as a prop
          />
          <Route
            exact
            path="/superheroes/:name"
            // render={routeProps => <Food {...routeProps} />} // Type in any URL in the address bar
            // render={routeProps => <Food name="pudding" routeProps={routeProps.match.params.name} />} // Add the URL as a prop
          />
        </Switch>
      </div>
    )
  };
}

export default App;
