import React from 'react';
import SamuraiRouter from './router';

import './App.css';
import './react-metismenu-standart.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <SamuraiRouter/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
