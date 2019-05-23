import React, { Component } from 'react'

export default class ButtonClicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
       num: 1
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const randomNum = Math.floor(Math.random() * 10) + 1
    this.setState({ num: randomNum })
  }

  render() {
    const { num } = this.state

    return (
      <div>
        <h1>Number is: {num}</h1>
        { num === 7 ? 'You win!!!' : <button onClick={this.handleClick}>Click Me!</button> }
      </div>
    )
  }
}
