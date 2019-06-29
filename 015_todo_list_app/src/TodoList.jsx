import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'

export default class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }

    this.deleteTodo = this.deleteTodo.bind(this)
    this.editTodoFormChangeHandler = this.editTodoFormChangeHandler.bind(this)
    this.setEditing = this.setEditing.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.crossTodoItem = this.crossTodoItem.bind(this)
  }

  crossTodoItem (id) {
    const { todos } = this.state
    const oldTodos = [...todos]
    const currentTodo = oldTodos.find(todo => todo.id === id)
    const currentTodoIndex = oldTodos.findIndex(todo => todo.id === id)

    currentTodo.crossedOff = !currentTodo.crossedOff

    const newTodos = [...oldTodos]
    newTodos[currentTodoIndex] = currentTodo

    this.setState({ todos: newTodos })
  }

  deleteTodo (id) {
    const { todos } = this.state
    const newTodos = todos.filter(todo => todo.id !== id )

    this.setState({
      todos: newTodos
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


  setEditing (id) {
    const { todos } = this.state
    const oldTodos = [...todos]

    const currentTodo = oldTodos.find(todo => todo.id === id)
    const currentTodoIndex = oldTodos.findIndex(todo => todo.id === id)
    currentTodo.editing = true

    const newTodos = [...oldTodos]
    newTodos[currentTodoIndex] = currentTodo

    this.setState({ todos: newTodos })
  }

  submitEdit (id) {
    const { todos } = this.state
    const oldTodos = [...todos]

    const currentTodo = oldTodos.find(todo => todo.id === id)
    const currentTodoIndex = oldTodos.findIndex(todo => todo.id === id)
    currentTodo.editing = false

    const newTodos = [...oldTodos]
    newTodos[currentTodoIndex] = currentTodo

    this.setState({ todos: newTodos })
  }

  addTodo (todo) {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo]
    }))
  }

  render() {
    const { todos } = this.state
    const {
      setEditing,
      crossTodoItem,
      editTodoFormChangeHandler,
      deleteTodo,
      submitEdit,
      addTodo
    } = this

    return (
      <div class="TodoList__container">
        <h1>Todo List!</h1>
        <h3>A simple React Todo List app.</h3>
        {todos.length > 0 && <hr />}
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
                  <button onClick={() => submitEdit(todo.id)}>Submit Edit</button>
                </form>
              )}
            else {
              return (
              <li
                key={todo.id}
                onClick={() => crossTodoItem(todo.id)}
              >
                <span class={`TodoList__item--description ${todo.crossedOff && "TodoList__item--crossed-off"}`}>{ todo.description }</span>
                <button class="TodoList__item--button" onClick={() => setEditing(todo.id)}>Edit?</button>
                <button onClick={() => deleteTodo(todo.id)}>X</button>
              </li>
              )
            }
          })}
        </ul>
        <hr />
        <NewTodoForm
          addTodo={addTodo}
        />
      </div>
    )
  }
}
