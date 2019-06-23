import React, { Component } from 'react'
import NewBoxForm from './NewBoxForm'
import Box from './Box'
import uuid from 'uuid/v4'

export default class BoxList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      boxes: []
    }

    this.addBox = this.addBox.bind(this)
  }

  addBox (box) {
    this.setState(prevState => ({
      boxes: [...prevState.boxes, box]
    }))
  }

  render() {
    const { boxes } = this.state
    const { addBox } = this

    return (
      <div>
        <h1>Colour Box Maker</h1>
        <NewBoxForm
          addBox={ addBox }
        />
        <div className="Box__container">
          { boxes.map(box => {
            return (
              <Box
                key={ uuid() }
                width={ box.width }
                height={ box.height }
                color={ box.color }
              />
            )
          }) }
        </div>
      </div>
    )
  }
}
