import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

import useTextInputState from './hooks/useTextInputState'

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useTextInputState('')

  return (
    <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
      <form
        onSubmit={e => {
          e.preventDefault()
          addTodo(value)
          reset()
        }}
      >
        <TextField
          onChange={handleChange}
          value={value}
          margin='normal'
          label='Add new Todo'
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default TodoForm
