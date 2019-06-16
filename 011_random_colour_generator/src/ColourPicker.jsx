import React, { Component } from 'react'
import ColourBlock from './ColourBlock'
import './ColourPicker.css'

export default class ColourPicker extends Component {
  static defaultProps = {
    colourBlockArray: Array.from({length: 20})
  }

  constructor(props) {
    super(props)

    this.state = {
      currentBackgroundColourArray: []
    }

    this.generateRandomColours = this.generateRandomColours.bind(this)
    this.changeColour = this.changeColour.bind(this)
  }

  componentDidMount() {
    const { generateRandomColours } = this

    generateRandomColours()
  }

  generateColour () {
    const randomColour = '#'+Math.floor(Math.random()*16777215).toString(16)
    return randomColour
  }

  generateRandomColours () {
    const { colourBlockArray } = this.props
    const newColourBlockArray = []
    const { generateColour } = this

    colourBlockArray.map(colourBlock => {
      newColourBlockArray.push(generateColour())
    })

    this.setState({
      currentBackgroundColourArray: newColourBlockArray
    })
  }

  changeColour (colour, index) {
    const { currentBackgroundColourArray } = this.state
    const { generateColour, changeColour } = this
    const coloursArray = [...currentBackgroundColourArray]
    const newColour = generateColour()

    newColour !== colour ? coloursArray[index] = newColour : changeColour()

    this.setState({
      currentBackgroundColourArray: coloursArray
    })
  }

  render() {
    const { currentBackgroundColourArray } = this.state
    const { changeColour } = this


    return (
      <div className="ColourPicker">
        <h1>Click a colour</h1>
        <div className="ColourPicker__container">
          {currentBackgroundColourArray.map((colour, index) => {
            return (
              <div
                onMouseOver={() => changeColour(colour, index)}
                key={index}
              >
                <ColourBlock
                  colour={colour}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
