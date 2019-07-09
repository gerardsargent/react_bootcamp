import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    return <div className="Dice">
      {this.props.dice.map((die, index) =>
        <Die handleClick={this.props.handleClick}
          val={die}
          locked={this.props.locked[index]}
          index={index}
          key={index}
          rolling={this.props.rolling}
        />
      )}
    </div>
  }
}

export default Dice;
