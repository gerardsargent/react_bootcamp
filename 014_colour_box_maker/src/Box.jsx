import React from 'react'

export default function Box(width, height, color) {
  const divStyle = {
    color: color,
    width: `${width}px`,
    height: `${height}px`,
  }

  return (
    <div style={ divStyle }>
    </div>
  )
}
