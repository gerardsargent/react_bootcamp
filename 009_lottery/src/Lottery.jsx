import React, { Component } from 'react'
import LottoBall from './LottoBall'
import './Lottery.css'

export default class Lottery extends Component {
  static defaultProps = {
    numBalls: 6,
    maxNum: 40,
    title: 'Lottery'
  };

  constructor(props) {
    super(props)

    this.state = {
      numbers: Array.from({ length: this.props.numBalls })
    }

    this.generateNumbers = this.generateNumbers.bind(this)
  }

  generateNumbers () {
    const { maxNum } = this.props
    // let newNumbers = []

    // for (let i = 0; i < numBalls; i++) {
    //   newNumbers.push((Math.floor(Math.random() * maxNum) + 1))
    // }

    // this.setState({
    //   numbers: newNumbers
    // })

    this.setState(prevState => ({
      numbers: prevState.numbers.map(
        number => Math.floor(Math.random() * maxNum) + 1)
    }))
  }

  render() {
    const { title } = this.props
    const { numbers } = this.state
    const { generateNumbers } = this

    const numberLine = numbers.map(number => (
      <LottoBall
        number={number}
      />
    ))

    return (
      <div className="Lottery">
        <h4 className="Lottery__title">{title}</h4>
        {numbers && numberLine}
        <br/>
        <button className="Lottery__button" onClick={generateNumbers}>Generate Numbers</button>
      </div>
    )
  }
}
