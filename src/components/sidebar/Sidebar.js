import React from 'react';
import MetisMenu from 'react-metismenu';
import { SIDEBAR_MENU1 } from '../../constants/sidebar-menus/sidebar-menu1/Sidebar-Menu1';
import { SIDEBAR_MENU2 } from '../../constants/sidebar-menus/sidebar-menu2/Sidebar-Menu2';

import './Sidebar.css';

function Sidebar() {
    return (
    <div>
        <MetisMenu content={SIDEBAR_MENU2} />
    </div>
    );
}

export default Sidebar;