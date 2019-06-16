import React, { Component } from "react"
// import uuid from 'uuid'
import Cell from "./Cell"
import './Board.css'


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

export default class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.8
  }

  constructor(props) {
    super(props);

    this.state = {
      board: this.createBoard(),
      hasWon: false
    }

    this.createBoard = this.createBoard.bind(this)
    this.flipCellsAroundMe = this.flipCellsAroundMe.bind(this)
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  createBoard() {
    const { nrows, ncols, chanceLightStartsOn } = this.props
    const randomBoolean = () => Math.random() >= chanceLightStartsOn

    let board = [];

    // Create array-of-arrays of true/false values
    for(let i = 0; i < nrows; i++) {
      board[i] = Array.from({
        length: ncols,
      })
      for(let j = 0; j < ncols; j++) {
        board[i][j] = randomBoolean()
      }
    }

    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAroundMe (coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    // this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {
    const { board } = this.state

    return (
      <div classname="Board">
        { board.map(row => {
          return (
            <div className="Board__row">
              { row.map(cell => {
                return (
                  <Cell
                    isLit={ cell }
                    x={ board[row] }
                    y={ row[cell] }
                  />
                )
              })}
            </div>
          )
        }) }
      </div>
    )

    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}
