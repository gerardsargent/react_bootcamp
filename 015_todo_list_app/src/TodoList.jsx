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
      <div className="flex-container">
        <div class="TodoList__container">
          <h1>Todo List</h1>
          <h3>A simple React Todo List app.</h3>
          <ul className="TodoList__unordered-list">
            {todos.map(todo => {
              if (todo.editing) {
                return (
                  <div className="TodoList__item">
                    <div className="TodoList__item--description-container">
                      <form className="TodoList__item--description" key={todo.id}>
                        <input
                          className="NewTodoForm__input"
                          value={todo.description}
                          onChange={(event) => editTodoFormChangeHandler(todo.id, event)}
                          name="description"
                        />
                        <button onClick={() => submitEdit(todo.id)}>Submit Edit</button>
                      </form>
                    </div>
                  </div>
                )}
              else {
                return (
                <li
                  key={todo.id}
                  onClick={() => crossTodoItem(todo.id)}
                  className="TodoList__item"
                >
                  <div className="TodoList__item--description-container">
                    <span className={`TodoList__item--description ${todo.crossedOff && "TodoList__item--crossed-off"}`}>{ todo.description }</span>
                  </div>
                  <div className="TodoList__button-container">
                    <button class="TodoList__button TodoList__button--green" onClick={() => setEditing(todo.id)}>Edit?</button>
                    <button class="TodoList__button TodoList__button--red" onClick={() => deleteTodo(todo.id)}>Delete</button>
                  </div>
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
      </div>
    )
  }
}
