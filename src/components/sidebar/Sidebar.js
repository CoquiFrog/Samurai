import React, { useState } from 'react';
import MetisMenu from 'react-metismenu';
import Outside from '../outside/Outside';
import { SIDEBAR_MENU1 } from '../../constants/sidebar-menus/sidebar-menu1/Sidebar-Menu1';
import { SIDEBAR_MENU2 } from '../../constants/sidebar-menus/sidebar-menu2/Sidebar-Menu2';

import './Sidebar.css';

function Sidebar() {
    const [hidden, setHidden] = useState('shown');
    return (
        <div>
            <div>hi</div>
            <p>Currently: {JSON.stringify(hidden)} </p>
                <div>
                </div>
            <Outside setHidden={setHidden} hidden={hidden}>
                <div className={hidden}>
                    <MetisMenu content={SIDEBAR_MENU2} />
                </div>
            </Outside>
        </div>
    );
}

export default Sidebar;


