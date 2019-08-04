import React from 'react'
import './Joke.css'

export default function Joke ({ joke, vote }) {
  const handleClick = (jokeId, operation) => {
    vote(jokeId, operation)
  }

  const getEmoji = (score) => {
    if (score <= 0) {
      return `${process.env.PUBLIC_URL}/img/0.svg`
    } else if (score >= 1 && score < 10) {
      return `${process.env.PUBLIC_URL}/img/${score}.svg`
    } else if (score >= 10) {
      return `${process.env.PUBLIC_URL}/img/9.svg`
    } else {
      return `${process.env.PUBLIC_URL}/img/0.svg`
    }
  }

  const getColor = (score) => {
    if (score >= 0 && score <= 2) {
      return "#FF9800"
    } else if (score >= 3 && score <= 5) {
      return "#FFC107"
    } else if (score >= 6 && score <= 8) {
      return "#FFEB3B"
    } else if (score >= 9 && score <= 11) {
      return "#CDDC39"
    } else if (score >= 12) {
      return "#4CAF50"
    } else {
      return "#f44336"
    }
  }

  return (
    <div className='Joke'>
      <div className="Joke-Score__container">
        <button
          onClick={() => handleClick(joke.id, "add")}
          className="Joke-Score__btn"
        >
          +1
        </button>
        <span
          className="Joke-Score__value"
          style={{ border: `solid 3px ${getColor(joke.score)}` }}
        >
          {joke.score}
        </span>
        <button
          onClick={() => handleClick(joke.id, "subtract")}
          className="Joke-Score__btn"
        >
          -1
        </button>
      </div>
      <div className="Joke-text-container">
        <p className="Joke-text">{joke.joke}</p>
      </div>
      <img
        className="Joke-Score__emoji"
        src={ getEmoji(joke.score) }
        alt="Joke Emoji"
      />
    </div>
  )
}
