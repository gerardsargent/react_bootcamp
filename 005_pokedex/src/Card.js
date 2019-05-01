import React, { Component } from 'react'
import Pokemon from './Pokemon'
import './Card.css'
import buildImageArray from './helpers'

class Card extends Component {
  render () {
    const images = buildImageArray(Pokemon)
    return (
      <div>
      {Pokemon.map((poke, index) =>
        <div className="Card" key={index}>
          {images.map((image, index) =>
            <div className="Card__img-container" key={index}>
              {console.log('image: ',image)}
              <img src={image} alt={poke.name}/>
            </div>
          )}
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
