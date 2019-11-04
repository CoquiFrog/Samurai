import React from 'react';
import logo from './Katana.svg';
import SamuraiRouter from './router';
import Toolbar from './components/toolbar/Toolbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I will soon be a coding samurai...
        </p>
        <Toolbar/>
        {/* style marginLeft is here for Sidebar */}
        <main style={{marginLeft: '64px'}}></main>
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
