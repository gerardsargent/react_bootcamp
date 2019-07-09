import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
} from '@fortawesome/free-solid-svg-icons'
import "./Die.css";

const generateDie = (val) => {
  switch (val) {
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

class Die extends Component {
  render() {
    const { locked, handleClick, index, val, rolling } = this.props

    return (
      <button
        className={`Die ${rolling && "Die-rolling"}`}
        style={{ backgroundColor: locked ? "grey" : "black" }}
        onClick={() => handleClick(index)}
      >
        <FontAwesomeIcon icon={generateDie(val)} />
      </button>
    );
  }
}

export default Die;
