import React from 'react';
import AppSubmenu from './AppSubmenu';

const AppMenu = (props) => {

    return (
        <AppSubmenu className="layout-menu layout-main-menu clearfix" items={props.model} menuMode={props.menuMode} menuActive={props.active} root onMenuitemClick={props.onMenuitemClick} onRootMenuitemClick={props.onRootMenuitemClick} />
    );
}

export default AppMenu;
