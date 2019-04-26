import React, { Component } from 'react'
import Pokemon from './Pokemon'
import './Card.css'

class Card extends Component {
  render () {
    return (
      <div>
      {Pokemon.map(poke =>
        <div className="Card">
          <div className="Card__img-container">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt=""/>
          </div>
          <div className="Card__name">
            {poke.name}
          </div>
          <div className="Card__details">
            <div className="Card__details--span">Type: {poke.type}</div>
            <div className="Card__details--span">Exp: {poke.base_experience}</div>
          </div>
        </div>
      )}
    </div>
    )
  }
}

export default Card
