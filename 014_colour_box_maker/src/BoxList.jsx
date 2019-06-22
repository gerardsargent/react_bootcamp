import React, { Component } from 'react'
import NewBoxForm from './NewBoxForm'

export default class BoxList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      boxes: []
    }
  }

  render() {
    return (
      <div>
        <h1>Colour Box Maker</h1>
        <NewBoxForm />
        <div className="Box__container">
          The Box Container
        </div>
      </div>
    )
  }
}
