import React, { Component } from 'react'

export default class ButtonClicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: 1,
      rolling: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      rolling: true
    })

    const randomNum = Math.floor(Math.random() * 10) + 1
    this.setState({ num: randomNum })

    setTimeout(() => {
      this.setState({
        rolling: false
      })
    }, 1000)
  }

  render() {
    const { num, rolling } = this.state

    return (
      <div>
        <h1>Number is: {num}</h1>
        { num === 7 ?
          'You win!!!' :
          <button
            onClick={this.handleClick}
            disabled={rolling}
          >
              Click Me!
          </button> }
      </div>
    )
  }
}
