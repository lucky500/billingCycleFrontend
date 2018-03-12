import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path='#/' label="Dashboard" icon="dashboard" />
        <MenuTree label="Sign In" icon="edit">
            <MenuItem path="#billingCycles" 
                      label="Payment Cycle" icon="usd" 
            />
        </MenuTree>
    </ul>
);