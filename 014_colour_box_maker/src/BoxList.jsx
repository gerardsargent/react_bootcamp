import React, { Component } from 'react'
import uuid from 'uuid/v4'
import NewBoxForm from './NewBoxForm'
import Box from './Box'
import './BoxList.css'

export default class BoxList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      boxes: []
    }

    this.addBox = this.addBox.bind(this)
    this.removeBox = this.removeBox.bind(this)
  }

  addBox (box) {
    this.setState(prevState => ({
      boxes: [...prevState.boxes, box]
    }))
  }

  removeBox (boxIndex) {
    const { boxes } = this.state

    const filteredBoxes = boxes.filter(box => box !== boxes[boxIndex])

    this.setState({
      boxes: filteredBoxes
    })
  }

  render() {
    const { boxes } = this.state
    const { addBox, removeBox } = this

    return (
      <div>
        <h1>Colour Box Maker</h1>
        <NewBoxForm
          addBox={ addBox }
        />
        <div className="BoxList__container">
          { boxes.map((box, boxIndex) => {
            return (
              <Box
                key={ uuid() }
                boxIndex={ boxIndex }
                width={ box.width }
                height={ box.height }
                color={ box.color }
                removeBox= { removeBox }
              />
            )
          }) }
        </div>
      </div>
    )
  }
}
