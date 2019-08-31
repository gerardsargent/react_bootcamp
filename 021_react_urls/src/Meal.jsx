import React, { Component } from 'react'

class Meal extends Component {
  render() {
    const { foodName, drinkName } = this.props.match.params
    const foodNameUrl = `https://source.unsplash.com/1600x900/?$${foodName}`
    const drinkNameUrl = `https://source.unsplash.com/1600x900/?$${drinkName}`

    return (
      <div>
        <h1>THIS IS A MEAL</h1>
        <p>It has {foodName} and {drinkName}</p>
        <div className="img-container">
          <img src={foodNameUrl} alt={foodName} />
        </div>
        <div className="img-container">
          <img src={drinkNameUrl} alt={drinkName} />
        </div>
      </div>
    )
  }
}

export default Meal
