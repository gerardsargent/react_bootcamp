import React, { Component } from 'react'
import axios from 'axios'
import uuid from 'uuid/v4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLaugh
} from '@fortawesome/free-solid-svg-icons'

import './JokeList.css'
import Joke from './Joke'
import SmileyMainImg from './img/smiley_main.svg'
export default class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  }

  constructor(props) {
    super(props)

    this.state = {
      jokes: JSON.parse(window.localStorage.getItem('savedJokes') || '[]'),
      loading: false
    }

    this.getNewJokes = this.getNewJokes.bind(this)
  }

  componentDidMount () {
    const { jokes } = this.state

    if (jokes.length === 0) {
      this.getNewJokes()
    }
  }

  async getNewJokes () {
    // this.getNewJokes()
    const { loading } = this.state

    this.setState({
      loading: true
    })

    const customHeader = {
      headers: {
        'Accept': 'application/json'
      }
    }

    // Create newJokes as new Array if initial load or as old jokes
    const newJokes = new Set()

    // Build a new Array of jokes and ids until there are 10 unique values
    for(let i = newJokes.size; i < this.props.numJokesToGet; i++) {
      let response = await axios.get('https://icanhazdadjoke.com/', customHeader)
      const newJoke = {
        id: uuid(),
        joke: response.data.joke,
        score: 0
      }
      newJokes.add(newJoke)
    }

    // Set state jokes as newJokes
    this.setState({
      jokes: Array.from(newJokes),
      loading: false
    })

    window.localStorage.setItem('savedJokes', JSON.stringify(Array.from(newJokes)))
  }

  vote = (jokeId, operation) => {
    const { jokes } = this.state
    const jokeToScore = jokes.find(joke => joke.id === jokeId)
    const jokeIndex = jokes.findIndex(joke => joke.id === jokeId)

    operation === 'add' ? jokeToScore.score++ : jokeToScore.score--

    jokes[jokeIndex] = jokeToScore

    const sortedJokes = jokes.sort((a, b) => a.score > b.score ? -1 : 1)

    this.setState({
      jokes: sortedJokes
    })

    window.localStorage.setItem('savedJokes', JSON.stringify(sortedJokes))
  }


  render() {
    const { jokes, loading } = this.state
    const { vote } = this

    return (
      <div className="JokeList">
        <div className="JokeList-header">
          <h1>Jokes Votes</h1>
          <img
            src={SmileyMainImg}
            className="JokeList-header__img"
          />
          <button
            className="JokeList-header__btn"
            onClick={() => this.getNewJokes()}
          >New Jokes</button>
        </div>
        <div className="JokeList-jokes">
          {loading ? (
            <div className="JokeList-loading">
              <p>Loading...</p>
              <div><FontAwesomeIcon icon={ faLaugh } spin /></div>
            </div>
          ) : jokes.map(joke => (
            <Joke
              key={joke.id}
              joke={joke}
              vote={vote}
            />
          ))}
        </div>
      </div>
    )
  }
}
