import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Food from './Food'
import Meal from './Meal'
import NavBar from './NavBar'
import FoodSearch from './FoodSearch'
import InvalidSearch from './InvalidSearch'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/food/:name"
            render={routeProps => <Food {...routeProps} />} // Type in any URL in the address bar
            // render={routeProps => <Food name="pudding" routeProps={routeProps.match.params.name} />} // Add the URL as a prop
          />
          <Route
            exact
            path="/food/:foodName/drink/:drinkName"
            component={Meal}
          />
          <Route
            exact
            path="/invalidSearch"
            component={InvalidSearch}
          />
          {/* Home page route */}
          <Route
            exact
            path="/"
            render={() => <FoodSearch />}
          />
          {/* 404 Route */}
          <Route exact render={() => <h1>ERROR: NOT FOUND!!!</h1>} />
        </Switch>
      </div>
    )
  };
}

export default App;
