import React, { Component } from 'react'
import axios from 'axios'
import Spinner from './img/spinner.gif'

export default class Deck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deck_id: '',
      cardData: {},
      loading: false,
      gameOver: false
    }

    this.drawCard = this.drawCard.bind(this)
  }

  componentDidMount () {
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => {
        this.setState({
          deck_id: response.data.deck_id
        })
      })
  }

  drawCard () {
    const { deck_id } = this.state

    this.setState ({ loading: true })

    axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
      .then(response => {
        this.setState({
          cardData: response,
          loading: false
        })
      })
  }

  render() {
    const { cardData, loading } = this.state
    const { drawCard } = this

    return (
      <div className="Deck__container">
        <button onClick={drawCard} class="Deck__button">Gimme a Card!</button>
        {cardData.data && (
          <div class="Deck__card-container">
            {loading ? <img className="Deck__spinner" src={ Spinner } alt="Loading" /> : <img className="Deck__card-img" src={cardData.data.cards[0].image} alt={`${cardData.data.cards[0].value} of ${cardData.data.cards[0].suit}`} />}
          </div>
        )}
      </div>
    )
  }
}

