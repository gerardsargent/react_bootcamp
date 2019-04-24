import React from 'react'
import { choice, remove } from './helpers'
import fruits from './foods'

function App() {
  const randomFruit = choice(fruits)
  const fruitsLeft = remove(fruits, randomFruit)

  return (
    <div>
      <p>I'd like one {randomFruit}, please</p>
      <p>Here you go: {randomFruit}</p>
      <p>Delicious! May I have another?</p>
      <p>I'm sorry, we're all out. We have {fruitsLeft.length} left.</p>
    </div>
  )
}

export default App
