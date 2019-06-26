import React, { Component } from 'react'
import uuid from 'uuid/v4'

export default class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {
          description: "Wash the grass",
          editing: false,
          id: uuid()
        },
        {
          description: "Dust the dog",
          editing: false,
          id: uuid()
        }
      ]
    }

    this.editTodoFormChange = this.editTodoFormChange.bind(this)
    this.setEditing = this.setEditing.bind(this)
  }

  editTodoFormChange (id, event) {
    const { todos } = this.state
    const oldTodos = [...todos]
    const currentTodo = oldTodos.find(todo => todo.id === id)
    currentTodo.description = event.target.value
    const newTodos = [...oldTodos, currentTodo]

    this.setState({
      newTodos
    })
  }

  setEditing (id) {
    const { todos } = this.state
    const oldTodos = [...todos]

    const currentTodo = oldTodos.find(todo => todo.id === id)
    currentTodo.editing = true

    const newTodos = [...oldTodos, currentTodo]

    this.setState({ newTodos })
  }

  render() {
    const { todos } = this.state
    const { setEditing, editTodoFormChange } = this

    return (
      <div>
        <ul className="TodoList__unordered-list">
          {todos.map(todo => {
            if (todo.editing) {
              return (
                <form key={todo.id}>
                  <input
                    value={todo.description}
                    onChange={(event) => editTodoFormChange(todo.id, event)}
                    name="description"
                  />
                </form>
              )}
            else {
              return (
              <li key={todo.id}>
                { todo.description }
                <button onClick={() => setEditing(todo.id)}>Edit?</button>
              </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}
