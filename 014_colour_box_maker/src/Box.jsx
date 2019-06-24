import React, { Component } from 'react'

class Box extends Component {
  render() {
    const { height, width, color } = this.props

    const handleClick = () => {
      const { boxIndex, removeBox } = this.props

      removeBox(boxIndex)
    }

    return (
      <div>
        <div style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: `${color}`,
        }}>
        </div>
        <button onClick={handleClick}>Remove</button>
      </div>
    )
  }
}

export default Box

