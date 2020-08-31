import React from 'react';
import otter from './images/Otter_Main.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={otter} alt="Otter" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Otter Water
        </a>
      </header>
    </div>
  );
}

export default App;
