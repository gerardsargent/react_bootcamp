import React, {Component} from 'react'
import "./Cell.css"


/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    const { flipCellsAroundMe, x, y } = this.props

    // call up to the board to flip cells around this cell
    flipCellsAroundMe(x, y);
  }

  render() {
    const { isLit } = this.props
    const { handleClick } = this

    let classes = "Cell" + (isLit ? " Cell-lit" : "");

    return (
        <div className={ classes } onClick={ handleClick }></div>
    )
  }
}


export default Cell
