import React from 'react'
import './LottoBall.css'

export default function LottoBall (number) {
  console.log('number passed to LottoBall: ', number)
  return (
    <span className="LottoBall__number">
      {number.number}
    </span>
  )
}
