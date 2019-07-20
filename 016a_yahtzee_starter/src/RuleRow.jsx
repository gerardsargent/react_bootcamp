import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    return (
      <tr className={`RuleRow ${this.props.score == null ? "RuleRow-active" : "RuleRow-disabled"}`} onClick={this.props.score == null ? this.props.doScore : null}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score == null ? this.props.description : this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;
