import React, { useState, useEffect } from 'react'

const Clicker = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  })

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  )
}

export default Clicker
