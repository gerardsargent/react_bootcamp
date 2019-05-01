import React, { Component } from 'react'

class CardImage extends Component {
  constructor ( props ) {
    super(props)
  }

  render () {
    const { imageUrl, poke } = this.props
    return (
      <div className="Card__img-container">
        <img src={imageUrl} alt={poke.name}/>
      </div>
    )
  }
}

export default CardImage
