import React, { Component } from 'react'
import Card from './Card'
import Pokemon from './Pokemon'
import { buildImageArray, dealHands, showWinner } from './helpers'


class Pokegame extends Component {
  render () {
    const arrayWithImgUrl = buildImageArray(Pokemon)
    const hands = dealHands(arrayWithImgUrl)

    return (
      <div>
        <div>
          <h1>The winner is: {showWinner(hands)}</h1>
          <h2>Hand 1</h2>
          {hands[0].map((poke, Pokeindex) =>
            <Card
              poke={poke}
              pokeIndex={Pokeindex}
            />
          )}
        </div>
        <hr />
        <div>
          <h2>Hand 2</h2>
          {hands[1].map((poke, Pokeindex) =>
            <Card
              poke={poke}
              pokeIndex={Pokeindex}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Pokegame
