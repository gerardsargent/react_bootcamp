import React from 'react'
import heads from './img/heads.png'
import tails from './img/tails.png'
import './Coin.css'

export default function Coin( coinFace ) {
  return (
    <div className="Coin">
      <img src={ coinFace.coinFace === 'tails'? tails : heads } alt="heads" className="Coin__face"/>
    </div>
  )
}
