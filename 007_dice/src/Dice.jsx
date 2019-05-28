import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
} from '@fortawesome/free-solid-svg-icons'
import './Dice.css'

const generateDice = (num) => {
  switch (num) {
    case 1:
      return faDiceOne
    case 2:
      return faDiceTwo
    case 3:
      return faDiceThree
    case 4:
      return faDiceFour
    case 5:
      return faDiceFive
    default:
      return faDiceSix
  }
}

const Dice = ({num, shaking}) => {
  return (
    <div className="Dice__col">
      <FontAwesomeIcon
        icon={generateDice(num)}
        className={`Dice__dice ${shaking && 'Dice__shake'}`}
      />
    </div>
  )
}

export default Dice
