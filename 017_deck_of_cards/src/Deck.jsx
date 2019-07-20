import React, { Component } from 'react'
import axios from 'axios'
import './Deck.css'

export default class Deck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deck_id: '',
      cardsPulled: [],
      cardsRemaining: 52,
      gameOver: false
    }

    this.drawCard = this.drawCard.bind(this)
    this.generateRandomNumber = this.generateRandomNumber.bind(this)
    this.getNewPack = this.getNewPack.bind(this)
  }

  componentDidMount () {
    this.getNewPack()
  }

  getNewPack () {
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => {
      this.setState({
        deck_id: response.data.deck_id
      })
    })

    this.setState({
      deck_id: '',
      cardsPulled: [],
      cardsRemaining: 52,
      gameOver: false
    })
  }

  drawCard () {
    const { deck_id, cardsPulled } = this.state
    const { generateRandomNumber } = this

    axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    .then(response => {
      const card = response.data.cards[0]
      const suit = card.suit.toLowerCase()
      const value = card.value.toLowerCase()
      const cardImage = card.image

      const newCardObject = {
        image: cardImage,
        rotationValue: generateRandomNumber(),
        description: `The ${value} of ${suit}`
      }

      const newCardsPulled = [...cardsPulled, newCardObject]

      this.setState({
        cardsPulled: newCardsPulled,
        cardsRemaining: response.data.remaining
      })
    })
  }

  generateRandomNumber() {
    let num = Math.floor(Math.random()*20) + 1 // generate num between 1 and 5
    num *= Math.floor(Math.random()*2) === 1 ? 1 : -1 // add minus sign in 50% of cases
    return num.toString()
  }

  render() {
    const { cardsPulled, cardsRemaining } = this.state
    const { drawCard, getNewPack } = this

    return (
      <div className="Deck__container">
        {cardsRemaining === 0 ?
          <button onClick={getNewPack} className="Deck__button">Start Again?</button> :
          <button onClick={drawCard} className="Deck__button">Gimme a Card!</button>}
          <div className="Deck__card-container">
            {cardsPulled.map((card, index) => (
              <img
                key={index}
                className="Deck__card-img"
                src={card.image}
                alt={card.description}
                style={{transform: `rotate(${card.rotationValue}deg)`}}
              />
            ))}
          </div>
      </div>
    )
  }
}

