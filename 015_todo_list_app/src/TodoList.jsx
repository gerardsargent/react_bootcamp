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

    this.deleteTodo = this.deleteTodo.bind(this)
    this.editTodoFormChangeHandler = this.editTodoFormChangeHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setEditing = this.setEditing.bind(this)
  }

  deleteTodo (id) {
    const { todos } = this.state
    const newTodos = todos.filter(todo => todo.id !== id )

    this.setState({
      newTodos
    })
  }

  editTodoFormChangeHandler (id, event) {
    const { todos } = this.state
    const oldTodos = [...todos]
    const currentTodo = oldTodos.find(todo => todo.id === id)
    currentTodo.description = event.target.value
    const newTodos = [...oldTodos, currentTodo]

    this.setState({
      newTodos
    })
  }

  handleSubmit (event) {

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
    const {
      setEditing,
      editTodoFormChangeHandler,
      deleteTodo,
      handleSubmit
    } = this

    return (
      <div>
        <h1>Todo List!</h1>
        <h3>A simple React Todo List app.</h3>
        <hr />
        <ul className="TodoList__unordered-list">
          {todos.map(todo => {
            if (todo.editing) {
              return (
                <form key={todo.id}>
                  <input
                    value={todo.description}
                    onChange={(event) => editTodoFormChangeHandler(todo.id, event)}
                    name="description"
                  />
                </form>
              )}
            else {
              return (
              <li key={todo.id}>
                { todo.description }
                <button onClick={() => setEditing(todo.id)}>Edit?</button>
                <button onClick={() => deleteTodo(todo.id)}>X</button>
              </li>
              )
            }
          })}
        </ul>
        <div>
          New Todo
          <form onSubmit={handleSubmit}>
            <input placeholder="New Todo"/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
