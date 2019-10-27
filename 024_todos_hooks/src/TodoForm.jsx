import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

import useTextInputState from './hooks/useTextInputState'

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useTextInputState('')

  return (
    <Paper>
      <form
        onSubmit={e => {
          e.preventDefault()
          addTodo(value)
          reset()
        }}
      >
        <TextField onChange={handleChange} value={value}/>
      </form>
    </Paper>
  )
}

export default TodoForm
