import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import axios from 'axios'

const SWMovies = () => {
  const movies = [1, 2, 3, 4, 5, 6, 7]
  const [number, setNumber] = useState(1)
  const [movie, setMovie] = useState('')

  // Using an async function inside a hook demands the function handling the response is made inside the
  // useEffect handler. The function is called immediately (via getData()), and this is controlled by
  // specifying which value(s) should trigger the re-renders (in this case 'number')

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://swapi.co/api/films/${number}/`)
      setMovie(response.data)
    }
    getData()
  }, [number])

  return (
    <div>
      <h1>Pick a Movie</h1>
      <h4>{movie.title}</h4>
      <p>{movie.opening_crawl}</p>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        {_.map(movies, (movie, index) => (
          <option
            key={index}
            value={`${movie}`}
          >
            {movie}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SWMovies
