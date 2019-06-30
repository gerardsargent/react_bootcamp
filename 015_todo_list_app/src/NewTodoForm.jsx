import React, { Component } from 'react'
import uuid from 'uuid/v4'
import './NewTodoForm.css'

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: ""
    }

    this.handleNewTodoOnChange = this.handleNewTodoOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNewTodoOnChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()

    const { addTodo } = this.props
    const { description } = this.state

    const newTodo = {
      description: description,
      editing: false,
      crossedOff: false,
      id: uuid()
    }

    addTodo(newTodo)

    this.setState({
      description: ""
    })
  }

  render() {
      const { handleNewTodoOnChange, handleSubmit } = this
      const { description } = this.state

    return (
      <div className="NewTodoForm__container" >
        <label htmlFor="new-todo">New Todo</label>
        <form className="NewTodoForm__container" onSubmit={handleSubmit}>
          <input
            className="NewTodoForm__input"
            onChange={event => handleNewTodoOnChange(event)}
            placeholder="New Todo"
            value={description}
            type="text"
            id="new-todo"
          />
          <button className="TodoList__button TodoList__button--info">Add</button>
        </form>
      </div>
    )
  }
}
