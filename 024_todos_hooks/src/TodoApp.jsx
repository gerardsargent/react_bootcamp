import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

import TodoList from './TodoList'
import './Todo.css'

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: 'Clean Fishtank', completed: false },
    { id: 2, task: 'Wash Car', completed: true },
    { id: 3, task: 'Grow Beard', completed: false }
  ]
  const [todos, setTodos] = useState(initialTodos)

  return (
    <Paper style={{
      padding: '10px',
      margin: 0,
      height: '100vh',
      backgroundColor: '#fafafa'
    }}>
      <AppBar
        color='primary'
        position='static'
        style={{ height: '64px' }}
      >
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  )
}

export default TodoApp
