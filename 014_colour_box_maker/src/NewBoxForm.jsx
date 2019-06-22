import React, { Component } from 'react'

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: "",
      height: "",
      color: "",
    }
  }

  render() {
    const { width, height, color } = this.state

    return (
      <form>
        <div>
          <label htmlFor="width">Width: </label>
          <input
            type="text"
            value={width}
            name="width"
            id="width"
            placeholder="How wide (px) will your box be?"
          />
        </div>
        <div>
          <label htmlFor="height">Height: </label>
          <input
            type="text"
            value={height}
            name="height"
            id="height"
            placeholder="How tall (px) will your box be?"
          />
        </div>
        <div>
          <label htmlFor="color">Colour: </label>
          <input
            type="text"
            value={color}
            name="color"
            id="color"
            placeholder="What colour will your box be?"
          />
        </div>
      </form>
    )
  }
}
