import React from 'react'
import Card from './Card'
import Pokegame from './Pokegame'
import './global.css'
import './Pokedex.css'

function App() {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex__header Pokedex__header--main">PokeDex</h1>
      <Pokegame />
    </div>
  );
}

export default App;
