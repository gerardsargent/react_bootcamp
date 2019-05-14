import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
  render (props) {
    const { poke, Pokeindex, imageUrl } = this.props

    return (
      <div className="Card" key={Pokeindex}>
        <div className="Card__img-container">
          <img src={imageUrl} alt={poke.name}/>
        </div>
        <div className="Card__name">
          {poke.name}
        </div>
        <div className="Card__details">
          <div className="Card__details--span">Type: {poke.type}</div>
          <div className="Card__details--span">Exp: {poke.base_experience}</div>
        </div>
      </div>
    )
  }
}

export default Card
