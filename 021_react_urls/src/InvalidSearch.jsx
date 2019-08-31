import React from 'react'
import { Link } from 'react-router-dom'

export default function InvalidSearch () {
  return (
    <div className='InvalidSearch'>
      <h1>Invalid Search!</h1>
      <Link to='/'>Go Back</Link>
    </div>
  )
}
