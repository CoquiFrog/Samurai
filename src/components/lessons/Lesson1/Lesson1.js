import React from 'react';
import { Link } from 'react-router-dom';

function Lesson1() {
    return (
        <div>
            <h1>I am the samurai Lesson1</h1>
            <Link to="/">
                <li>Go Back</li>
            </Link>
        </div>
    );
}

export default Lesson1;