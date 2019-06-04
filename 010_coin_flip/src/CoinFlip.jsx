import React, { Component } from 'react'
import Coin from './Coin'

export default class CoinFlip extends Component {
  static defaultProps = {
    coinFaces: ['heads', 'tails']
  }

  constructor(props) {
    super(props)

    this.state = {
      totalFlipCount: 0,
      headsCount: 0,
      tailsCount: 0,
      coinFace: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const coinFaces = this.props

    const coinLandedOn = coinFaces.coinFaces[Math.floor(Math.random() * 2)]

    this.setState(prevState => {
      return {
        totalFlipCount: prevState.totalFlipCount + 1,
        headsCount: prevState.headsCount + (coinLandedOn === 'heads' ? 1 : 0),
        tailsCount: prevState.tailsCount + (coinLandedOn === 'tails' ? 1 : 0),
        coinFace: (coinLandedOn === 'heads' ? 'heads' : 'tails')
      }
    })
  }

  render() {
    const {
      totalFlipCount,
      headsCount,
      tailsCount,
      coinFace
    } = this.state
    const { handleClick } = this

    return (
      <div className="CoinFlip">
        <h1>Let's flip a coin</h1>
        <Coin coinFace={coinFace}/>
        <button onClick={handleClick}>Flip me!</button>
        <p>Out of {totalFlipCount}, there have been {headsCount} heads and {tailsCount} tails.</p>
      </div>
    )
  }
}
