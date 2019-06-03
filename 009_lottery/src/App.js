import React from 'react';
import './App.css';
import Lottery from './Lottery'

function App() {
  return (
    <div className="App">
      <Lottery title="Lottery" />
      <Lottery title="Mini-Lottery" numBalls={4} maxNum={10}/>
    </div>
  );
}

export default App;
