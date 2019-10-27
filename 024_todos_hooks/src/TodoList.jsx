import React from 'react'
import _ from 'lodash'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'

const TodoList = ({ todos }) => {
  return (
    <Paper>
      <List>
        {_.map(todos, (todo, index) => (
          <>
            <ListItem>
              <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList
