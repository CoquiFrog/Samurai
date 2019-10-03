import React from 'react';
import { Link } from 'react-router-dom';

function GoBack() {
    return (
        <div>
            <Link to="/">
                <li>Go Back</li>
            </Link>
        </div>
    );
}

export default GoBack;