import React from 'react'
import useToggle from './hooks/useToggle'

const Toggle = () => {
  const [isHappy, toggleIsHappy] = useToggle(true)
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(false)

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? '😀' : '😢'}</h1>
      <h1 onClick={toggleIsHeartBroken}>{isHeartBroken ? '💔' : '❤️'}</h1>
    </div>
  )
}

export default Toggle
