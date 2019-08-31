import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class FoodSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: ""
    }
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    const { query } = this.state
    const { handleChange } = this

    return (
      <div className="FoodSearch">
        <div>
          <h1>Search for an Image below</h1>

          <input
            type="text"
            value={query}
            placeholder="Search for a food"
            onChange={handleChange} />

          <Link to={`food/${query}`}>Go!</Link>
        </div>
      </div>
    )
  }
}
