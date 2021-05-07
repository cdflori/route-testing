import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { Ripple } from 'primereact/ripple';

const AppSubmenu = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onMenuItemClick = (event, item, index) => {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        //execute command
        if (item.command) {
            item.command({ originalEvent: event, item });
            event.preventDefault();
        }

        if (item.items) {
            event.preventDefault();
        }

        if (props.root) {
            props.onRootMenuitemClick({
                originalEvent: event
            });
        }

        if (item.items) {
            setActiveIndex(activeIndex === index ? null : index);
        }

        props.onMenuitemClick({
            originalEvent: event,
            item
        });
    };

    const isMobile = useCallback(() => {
        return window.innerWidth <= 1025;
    }, []);

    const onMenuItemMouseEnter = (index) => {
        if (props.root && props.menuActive && (isHorizontal() || isSlim()) && !isMobile()) {
            setActiveIndex(index);
        }
    };

    const visible = (item) => {
        return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
    };

    const isSlim = useCallback(() => {
        return props.menuMode === 'slim';
    }, [props.menuMode]);

    const isHorizontal = useCallback(() => {
        return props.menuMode === 'horizontal';
    }, [props.menuMode]);

    const getLink = (item, index) => {
        const menuitemIconClassName = classNames('layout-menuitem-icon', item.icon);
        const content = (
            <>
                <i className={menuitemIconClassName}></i>
                <span className="layout-menuitem-text">{item.label}</span>
                { item.items && <i className="pi pi-fw pi-angle-down menuitem-toggle-icon"></i>}
                { item.badge && <span className="menuitem-badge">{item.badge}</span>}
                <Ripple />
            </>
        );
        const commonLinkProps = {
            'style': item.style,
            'className': classNames(item.className, 'p-ripple', { 'p-disabled': item.disabled, 'p-link': !item.to }),
            'target': item.target,
            'onClick': (e) => onMenuItemClick(e, item, index),
            'onMouseEnter': () => onMenuItemMouseEnter(index)
        }

        if (item.url) {
            return <a href={item.url} rel="noopener noreferrer" {...commonLinkProps}>{content}</a>
        }
        else if (!item.to) {
            return <button type="button" {...commonLinkProps}>{content}</button>
        }

        return <NavLink to={item.to} exact activeClassName="router-link-active" {...commonLinkProps}>{content}</NavLink>;
    };

    const isMenuActive = (index) => {
        return activeIndex === index;
    }

    const getItems = () => {
        const transitionTimeout = { enter: 1000, exit: 450 };
        return props.items.map((item, i) => {
            if (visible(item)) {
                if (!item.separator) {
                    const menuitemClassName = classNames({ 'active-menuitem': activeIndex === i && !item.disabled },{ 'layout-root-menuitem': props.root });
                    const arrow = item.items && props.root && <div className="arrow"></div>;
                    const link = getLink(item, i);
                    const tooltip = props.root && <div className="layout-menuitem-root-text" style={{ textTransform: 'uppercase' }}>
                        {item.label}
                    </div>;

                    return (
                        <li key={item.label || i} className={menuitemClassName} role="menuitem">
                            {arrow}
                            {link}
                            {tooltip}
                            <CSSTransition classNames="layout-submenu-container" timeout={transitionTimeout}  in={item.items && (props.root && !((isHorizontal() || isSlim()) && !isMobile && (!isSlim() || (isSlim() && activeIndex !== null))) ? true : isMenuActive(i))} unmountOnExit>
                                <AppSubmenu items={visible(item) && item.items} menuActive={props.menuActive} menuMode={props.menuMode} onMenuitemClick={props.onMenuitemClick}></AppSubmenu>
                            </CSSTransition>
                        </li>
                    )
                }
                else {
                    return <li className="menu-separator" style={item.style} key={`separator${i}`} role="separator"></li>;
                }
            }

            return null;
        })
    };

    useEffect(() => {
        if (!props.menuActive && (isSlim() || isHorizontal()) && !isMobile()) {
            setActiveIndex(null);
        }
    }, [props, isSlim, isHorizontal, isMobile]);

    if (!props.items) {
        return null;
    }

    const items = getItems();
    return (
        <ul className={props.className} role="menu">
            {items}
        </ul>
    )
}

export default AppSubmenu;
