import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Katana.svg';

import Hamburger from '../hamburger/Hamburger'
import Sidebar from '../sidebar/Sidebar';

import './Home.css';

function Home() {
    const [hidden, setHidden] = useState('shown');
    return (
        <div>
            <p>Currently: {JSON.stringify(hidden)} </p>
            <Hamburger setHidden={setHidden} hidden={hidden}></Hamburger>
            <div className="sidebar"><Sidebar setHidden={setHidden} hidden={hidden}/></div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            I will soon be a coding samurai...
            </p>
            <h1>I am the samurai HOME</h1>
            <p>Here are some links for you friend:</p>
                <Link to="/lesson1">
                    <li>Lesson 1</li>
                </Link>
        </div>
    );
}

export default Home;