import React, { Component } from 'react'
import Dice from './Dice'
import './RollDice.css'

export default class RollDice extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rand1: 1,
      rand2: 2,
      shaking: false,
    }

    this.rollDice = this.rollDice.bind(this)
  }

  rollDice = (e) => {
    const { resetDice } = this

    this.setState({
      rand1: Math.floor(Math.random() * 6) + 1,
      rand2: Math.floor(Math.random() * 6) + 1,
      shaking: true
    })

    setTimeout(resetDice, 1000)
  }

  resetDice = () => {
    this.setState({ shaking: false })
  }

  render() {
    const { rand1, rand2, shaking } = this.state
    const { rollDice } = this

    return (
      <div className="RollDice__main-container">
        <h1>Roll Dice</h1>
        <h3>Score 7 to win</h3>
        <div className="RollDice__dice-container">
          <Dice
            num={rand1}
            shaking={shaking}
          />
          <Dice
            num={rand2}
            shaking={shaking}
          />
        </div>
        {rand1 + rand2 === 7 ?
          <h2>You win!</h2> :
          <button
            className="RollDice__button"
            onClick={rollDice}
            disabled={shaking}
          >
            {shaking ? 'Rolling' : 'Roll'}
          </button>}
      </div>
    )
  }
}
