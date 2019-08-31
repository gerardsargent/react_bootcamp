import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="App__nav">
      <NavLink exact activeClassName='App__link--active' className='App__link' to='/'>
        Vending Machine
      </NavLink>
      <NavLink exact activeClassName='App__link--active' className='App__link' to='/soda'>
        Soda
      </NavLink>
      <NavLink exact activeClassName='App__link--active' className='App__link' to='/chips'>
        Chips
      </NavLink>
      <NavLink exact activeClassName='App__link--active' className='App__link' to='/fresh-sardines'>
        Fresh Sardines
      </NavLink>
    </nav>
  )
}
