import React from 'react'
import Card from './Card'
import './global.css'
import './Pokedex.css'

function App() {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex__header Pokedex__header--main">Pokedex</h1>
      <Card />
    </div>
  );
}

export default App;
