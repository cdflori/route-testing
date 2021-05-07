import React, { } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

const AppInlineProfile = (props) => {

    const onClick = (event) => {
        props.onProfileClick(event);
        event.preventDefault();
    }

    const profileClassName = classNames('profile', { 'profile-expanded': props.expanded });
    const tabIndex = props.expanded ? null : '-1';

    return (
        <div>
            <div className={profileClassName}>
                <button className="p-link" onClick={onClick}>
                    <img alt="Profile" className="profile-image" src="assets/layout/images/avatar.png" />
                    <span className="profile-name">Isabel Oliviera</span>
                    <i className="pi pi-fw pi-chevron-down"></i>
                    <span className="profile-role">Marketing</span>
                </button>
            </div>

            <CSSTransition classNames="layout-profile-menu" timeout={{ enter: 1000, exit: 400 }} in={props.expanded} unmountOnExit>
                <ul className="layout-menu profile-menu">
                    <li role="menuitem">
                        <button className="p-link" tabIndex={tabIndex}>
                            <i className="pi pi-fw pi-user"></i>
                            <span>Profile</span>
                        </button>
                        <div className="layout-menu-tooltip">
                            <div className="layout-menu-tooltip-arrow"></div>
                            <div className="layout-menu-tooltip-text">Profile</div>
                        </div>
                    </li>
                    <li role="menuitem">
                        <button className="p-link" tabIndex={tabIndex}>
                            <i className="pi pi-fw pi-lock"></i>
                            <span>Privacy</span>
                        </button>
                        <div className="layout-menu-tooltip">
                            <div className="layout-menu-tooltip-arrow"></div>
                            <div className="layout-menu-tooltip-text">Privacy</div>
                        </div>
                    </li>
                    <li role="menuitem">
                        <button className="p-link" tabIndex={tabIndex}>
                            <i className="pi pi-fw pi-cog"></i>
                            <span>Settings</span>
                        </button>
                        <div className="layout-menu-tooltip">
                            <div className="layout-menu-tooltip-arrow"></div>
                            <div className="layout-menu-tooltip-text">Settings</div>
                        </div>
                    </li>
                    <li role="menuitem">
                        <button className="p-link" tabIndex={tabIndex} to="/login">
                            <i className="pi pi-fw pi-sign-out"></i>
                            <span>Login</span>
                        </button>
                        <div className="layout-menu-tooltip">
                            <div className="layout-menu-tooltip-arrow"></div>
                            <div className="layout-menu-tooltip-text">Logout</div>
                        </div>
                    </li>
                </ul>
            </CSSTransition>
        </div>
    )
}

export default AppInlineProfile;
