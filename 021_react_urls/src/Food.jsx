import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

export default class Food extends Component {
  constructor(props) {
    super(props)
  }

  showName = (name) => {
    console.log('name: ', name)
  }

  handleClick = () => {
    const { history } = this.props

    alert('Saved to DB!')
    history.push('/')
  }

  render() {
    const name = this.props.match.params.name
    // const { name } = this.props
    const url = `https://source.unsplash.com/1600x900/?$${name}`
    const { showName, handleClick } = this

    return (
      <div className="Food">
        {/\d/.test(name) ? (
          <Redirect to='/invalidSearch' />
        ) : (
          <>
            <h1>I like {name}</h1>
            <div className="img-container">
              <img src={url} alt={name} />
            </div>
            {showName(name)}
            <Link to="/">Go Back</Link>
            <button onClick={handleClick}>Save to DB</button>
          </>
        )}
      </div>
    )
  }
}
