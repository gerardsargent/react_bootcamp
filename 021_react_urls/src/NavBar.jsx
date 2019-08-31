import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  handleLogin = () => {
    alert('You are now logged in!!!')
    this.props.history.push('/food/sausages')
  }

  handleBack = () => {
    this.props.history.goBack()
  }

  handleForward = () => {
    this.props.history.goForward()
  }

  render() {
    const { handleLogin, handleBack, handleForward } = this
    return (
      <div className="NavBar">
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleForward}>Forward</button>
      </div>
    )
  }
}

export default withRouter(NavBar)
