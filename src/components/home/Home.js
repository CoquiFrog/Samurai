import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>I am the samurai HOME</h1>
            <p>Here are some links for you friend:</p>
                <Link to="/sidebar">
                    <li>Sidebar</li>
                </Link>
                <Link to="/lesson1">
                    <li>Lesson 1</li>
                </Link>
        </div>
    );
}

export default Home;