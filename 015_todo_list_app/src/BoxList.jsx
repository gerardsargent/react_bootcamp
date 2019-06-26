import React, { Component } from 'react'

export default class BoxList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {
          description: "Wash the car",
          editing: false
        },
        {
          description: "Water the dog",
          editing: false
        }
      ]
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {

  }

  render() {
    const { todos } = this.state
    const { handleClick } = this

    return (
      <div>
        <ul className="BoxList__unordered-list">
          {todos.map(todo => {
            return (<li>{ todo.description } <button onClick={handleClick}>Edit?</button></li>)
          })}
        </ul>
      </div>
    )
  }
}
