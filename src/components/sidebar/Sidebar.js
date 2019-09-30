import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div>
            <h1>I am the samurai sidebar</h1>
            <Link to="/">
                <li>Go Back</li>
            </Link>
        </div>
    );
}

export default Sidebar;