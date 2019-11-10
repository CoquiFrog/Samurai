import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Katana.svg';


import Sidebar from '../sidebar/Sidebar';

function Home() {
    return (
        <div>
        {/* style marginLeft is here for Sidebar */}
        <div className="sidebar"><Sidebar /></div>
            
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