import React from 'react'
import './ColourBlock.css'

export default function ColourBlock ({ index, colour }) {
  const backgroundColour = {
    backgroundColor: colour
  }

  return (
    <div className='ColourBlock'
      key={index}
      style={backgroundColour}
    ></div>
  )
}
