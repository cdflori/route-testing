import React, { useState } from 'react';
import classNames from 'classnames';
import { Route } from 'react-router-dom';

import AppTopBar from './AppTopbar';
import AppConfig from './AppConfig';
import AppMenu from './AppMenu';
import AppInlineProfile from './AppInlineProfile';
import "bootstrap/dist/css/bootstrap.min.css";


import { Dashboard } from './components/Dashboard';
import { DashboardBanking } from './components/DashboardBanking';
import { FormLayoutDemo } from './components/FormLayoutDemo';
import { InputDemo } from './components/InputDemo';
import { FloatLabelDemo } from './components/FloatLabelDemo';
import { InvalidStateDemo } from './components/InvalidStateDemo';
import { ButtonDemo } from './components/ButtonDemo';
import { TableDemo } from './components/TableDemo';
import { ListDemo } from './components/ListDemo';
import { TreeDemo } from './components/TreeDemo';
import { PanelDemo } from './components/PanelDemo';
import { OverlayDemo } from './components/OverlayDemo';
import { MediaDemo } from './components/MediaDemo';
import { MenuDemo } from './components/MenuDemo';
import { MessagesDemo } from './components/MessagesDemo';
import { FileDemo } from './components/FileDemo';
import { ChartDemo } from './components/ChartDemo';
import { MiscDemo } from './components/MiscDemo';
import { Documentation } from './components/Documentation';
import { IconsDemo } from './utilities/IconsDemo';
import { Widgets } from './utilities/Widgets';
import { GridDemo } from './utilities/GridDemo';
import { SpacingDemo } from './utilities/SpacingDemo';
import { ElevationDemo } from './utilities/ElevationDemo';
import { TextDemo } from './utilities/TextDemo';
import { TypographyDemo } from './utilities/TypographyDemo';
import { DisplayDemo } from './utilities/DisplayDemo';
import { FlexBoxDemo } from './utilities/FlexBoxDemo';
import { CrudDemo } from './pages/CrudDemo';
import { TimelineDemo } from './pages/TimlineDemo';
import { CalendarDemo } from './pages/CalendarDemo';
import { Invoice } from './pages/Invoice';
import { Help } from './pages/Help';
import { EmptyPage } from './pages/EmptyPage';
import { InstructorList } from './components/InstructorList';

import PrimeReact from 'primereact/api';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';
import { ReportForm } from './components/ReportForm/ReportForm';
import Signup from './importedComponents/SignUp/Signup';
import Login  from './importedComponents/Login/Login';
import Home from './importedComponents/Home';



const DashboardApp = () => {

    const [menuActive, setMenuActive] = useState(false);
    const [profileMode, setProfileMode] = useState('inline');
    const [profileExpanded, setProfileExpanded] = useState(false);
    const [menuMode, setMenuMode] = useState('static');
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [staticMenuDesktopInactive, setStaticMenuDesktopInactive] = useState(false);
    const [staticMenuMobileActive, setStaticMenuMobileActive] = useState(false);
    const [topbarMenuActive, setTopbarMenuActive] = useState(false);
    const [activeTopbarItem, setActiveTopbarItem] = useState(null);
    const [darkMenu, setDarkMenu] = useState(false);
    const [theme, setTheme] = useState('blue');
    const [layout, setLayout] = useState('blue');
    const [configActive, setConfigActive] = useState(false);
    const [inputStyle, setInputStyle] = useState('outlined');
    const [ripple, setRipple] = useState(false);

    let menuClick = false;
    let topbarItemClick = false;
    let configClick = false;

    const menu = [
        {
            label: 'Favorites', icon: 'pi pi-fw pi-home',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
                { label: 'Login', icon: 'pi pi-fw pi-home', to: '/login' },
            ]
        },
        {
            label: 'For Instructors', icon: 'pi pi-fw pi-star-o', badge: 6,
            items: [
                { label: 'Incidents', icon: 'pi pi pi-inbox', to: '/incident' },
                // { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
                // { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input' },
                // { label: 'Float Label', icon: "pi pi-fw pi-bookmark", to: "/floatlabel" },
                // { label: 'Invalid State', icon: "pi pi-fw pi-exclamation-circle", to: "/invalidstate" },
                // { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button', className: 'rotated-icon' },
                // { label: 'Table', icon: 'pi pi-fw pi-table', to: '/table' },
                // { label: 'List', icon: 'pi pi-fw pi-list', to: '/list' },
                // { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree' },
                // { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel' },
                // { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay' },
                // { label: "Media", icon: "pi pi-fw pi-image", to: "/media" },
                // { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu' },
                // { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages' },
                // { label: 'File', icon: 'pi pi-fw pi-file', to: '/file' },
                // { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart' },
                // { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc' },
            ]
        },

        {
            label: 'Support', icon: 'pi pi-fw pi-star-o', badge: 6,
            items: [
                { label: 'Report Incident', icon: 'pi pi pi-inbox', to: '/user' },
            ]
        },
        // {
        //     label: "Utilities", icon: 'pi pi-fw pi-compass',
        //     items: [
        //         { label: 'Display', icon: 'pi pi-fw pi-desktop', to: '/display' },
        //         { label: 'Elevation', icon: 'pi pi-fw pi-external-link', to: '/elevation' },
        //         { label: 'Flexbox', icon: 'pi pi-fw pi-directions', to: '/flexbox' },
        //         { label: 'Icons', icon: 'pi pi-fw pi-search', to: '/icons' },
        //         { label: 'Widgets', icon: 'pi pi-fw pi-star-o', to: '/widgets' },
        //         { label: 'Grid System', icon: 'pi pi-fw pi-th-large', to: '/grid' },
        //         { label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', to: '/spacing' },
        //         { label: 'Typography', icon: 'pi pi-fw pi-align-center', to: '/typography' },
        //         { label: 'Text', icon: 'pi pi-fw pi-pencil', to: '/text' },
        //     ]
        // },
        // {
        //     label: 'Pages', icon: 'pi pi-fw pi-briefcase', badge: 8, badgeStyleClass: 'teal-badge',
        //     items: [
        //         { label: 'Crud', icon: 'pi pi-fw pi-pencil', to: 'dashboard/incident' },
        //         { label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar' },
        //         { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline' },
        //         { label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank' },
        //         { label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login' },
        //         { label: 'Invoice', icon: 'pi pi-fw pi-dollar', to: '/invoice' },
        //         { label: 'Help', icon: 'pi pi-fw pi-question-circle', to: '/help' },
        //         { label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error' },
        //         { label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', to: '/notfound' },
        //         { label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access' },
        //         { label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: '/empty' }
        //     ]
        // },
        // {
        //     label: 'Hierarchy', icon: 'pi pi-fw pi-align-left',
        //     items: [
        //         {
        //             label: 'Submenu 1', icon: 'pi pi-fw pi-align-left',
        //             items: [
        //                 {
        //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-align-left',
        //                     items: [
        //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left' },
        //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left' },
        //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left' },
        //                     ]
        //                 },
        //                 {
        //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-align-left',
        //                     items: [
        //                         { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left' },
        //                         { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-align-left' }
        //                     ]
        //                 },
        //             ]
        //         },
        //         {
        //             label: 'Submenu 2', icon: 'pi pi-fw pi-align-left',
        //             items: [
        //                 {
        //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-align-left',
        //                     items: [
        //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left' },
        //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left' },
        //                         { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-align-left' },
        //                     ]
        //                 },
        //                 {
        //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-align-left',
        //                     items: [
        //                         { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left' },
        //                         { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-align-left' }
        //                     ]
        //                 },
        //             ]
        //         }
        //     ]
        // },
        // {
        //     label: 'Start', icon: 'pi pi-fw pi-download',
        //     items: [
        //         {
        //             label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', command: () => { window.location = "https://www.primefaces.org/store" }
        //         },
        //         {
        //             label: 'Documentation', icon: 'pi pi-fw pi-info-circle', to: '/documentation'
        //         }
        //     ]
        // }
    ];

    const routers = [
        { path: '/', component: Dashboard, exact: true },
        { path: '/login', component: Login, exact: true },
        { path: '/signup', component: Signup, exact: true },
        { path: '/dashboards/generic', component: Dashboard },
        { path: '/dashboards/dashboard_banking', component: DashboardBanking },
        { path: '/formlayout', component: FormLayoutDemo },
        { path: '/input', component: InputDemo },
        { path: '/floatlabel', component: FloatLabelDemo },
        { path: '/invalidstate', component: InvalidStateDemo },
        { path: '/button', component: ButtonDemo },
        { path: '/table', component: TableDemo },
        { path: '/list', component: ListDemo },
        { path: '/tree', component: TreeDemo },
        { path: '/panel', component: PanelDemo },
        { path: '/overlay', component: OverlayDemo },
        { path: '/media', component: MediaDemo },
        { path: '/menu', component: MenuDemo },
        { path: '/messages', component: MessagesDemo },
        { path: '/file', component: FileDemo },
        { path: '/chart', component: ChartDemo },
        { path: '/misc', component: MiscDemo },
        { path: '/icons', component: IconsDemo },
        { path: '/widgets', component: Widgets },
        { path: '/grid', component: GridDemo },
        { path: '/spacing', component: SpacingDemo },
        { path: '/elevation', component: ElevationDemo },
        { path: '/typography', component: TypographyDemo },
        { path: '/display', component: DisplayDemo },
        { path: '/flexbox', component: FlexBoxDemo },
        { path: '/text', component: TextDemo },
        { path: '/incident', component: CrudDemo },
        { path: '/user', component: InstructorList },
        { path: '/report', component: ReportForm},
        { path: '/timeline', component: TimelineDemo },
        { path: '/calendar', component: CalendarDemo },
        { path: '/invoice', component: Invoice },
        { path: '/help', component: Help },
        { path: '/empty', component: EmptyPage },
        // { path: '/login', component: Login },
        // { path: '/signup', component: Signup },
        { path: '/home', component: Home },
        { path: '/documentation', component: Documentation },
    ];

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    };

    const onRippleChange = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    };

    const onDocumentClick = () => {
        if (!topbarItemClick) {
            setActiveTopbarItem(null);
            setTopbarMenuActive(false);
        }

        if (!menuClick) {
            if (isHorizontal() || isSlim()) {
                setMenuActive(false);
            }

            hideOverlayMenu();
        }

        if (configActive && !configClick) {
            setConfigActive(false);
        }

        menuClick = false;
        topbarItemClick = false;
        configClick = false;
    };

    const onProfileClick = (e) => {
        setProfileExpanded(prevProfileExpanded => !prevProfileExpanded);
    };

    const onMenuClick = () => {
        menuClick = true;
    };

    const onMenuitemClick = (event) => {
        if (!event.item.items) {
            hideOverlayMenu();
        }

        if (!event.item.items && (isSlim() || isHorizontal())) {
            setMenuActive(false);
        }
    };

    const onRootMenuitemClick = () => {
        setMenuActive(prevMenuActive => !prevMenuActive);
    };

    const onMenuButtonClick = (event) => {
        menuClick = true;
        setTopbarMenuActive(false);

        if (menuMode === 'overlay') {
            setOverlayMenuActive(prevOverlayMenuActive => !prevOverlayMenuActive);
        }
        else {
            if (isDesktop())
                setStaticMenuDesktopInactive(prevStaticMenuDesktopInactive => !prevStaticMenuDesktopInactive);
            else
                setStaticMenuMobileActive(prevStaticMenuMobileActive => !prevStaticMenuMobileActive);
        }

        event.preventDefault();
    };

    const onTopbarMenuButtonClick = (event) => {
        topbarItemClick = true;
        setTopbarMenuActive(prevTopbarMenuActive => !prevTopbarMenuActive);
        hideOverlayMenu();
        event.preventDefault();
    };

    const onTopbarItemClick = (e) => {
        topbarItemClick = true;

        if (activeTopbarItem === e.item)
            setActiveTopbarItem(null)
        else
            setActiveTopbarItem(e.item);

        e.originalEvent.preventDefault();
    };

    const hideOverlayMenu = () => {
        setOverlayMenuActive(false);
        setStaticMenuMobileActive(false);
    };

    const isDesktop = () => {
        return window.innerWidth > 1024;
    };

    const isHorizontal = () => {
        return menuMode === 'horizontal';
    };

    const isSlim = () => {
        return menuMode === 'slim';
    };

    const isMenuVisible = () => {
        if (isDesktop()) {
            if (menuMode === 'static')
                return !staticMenuDesktopInactive;
            else if (menuMode === 'overlay')
                return overlayMenuActive;
            else
                return true;
        } else {
            if (staticMenuMobileActive)
                return true;
            else if (menuMode === 'overlay')
                return overlayMenuActive;
            else
                return true;
        }
    };

    const onMenuModeChange = (e) => {
        setMenuMode(e.value);
        setStaticMenuDesktopInactive(false);
        setOverlayMenuActive(false);

        if (e.value === 'horizontal') {
            setProfileMode('top');
        }
    };

    const onMenuColorChange = (e) => {
        setDarkMenu(e.value);
    };

    const onProfileModeChange = (e) => {
        setProfileMode(e.value);
    };

    const onConfigClick = () => {
        configClick = true;
    };

    const onConfigButtonClick = () => {
        setConfigActive(prevConfigActive => !prevConfigActive);
        configClick = true;
    };

    const onLayoutColorChange = (color) => {
        setLayout(color);
    };

    const onThemeChange = (color) => {
        setTheme(color);
    };

    let containerClassName = classNames('layout-wrapper', {
        'menu-layout-static': menuMode !== 'overlay',
        'menu-layout-overlay': menuMode === 'overlay',
        'layout-menu-overlay-active': overlayMenuActive,
        'menu-layout-slim': menuMode === 'slim',
        'menu-layout-horizontal': menuMode === 'horizontal',
        'layout-menu-static-inactive': staticMenuDesktopInactive,
        'layout-menu-static-active': staticMenuMobileActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': !ripple,
    });
    let menuClassName = classNames('layout-menu-container', { 'layout-menu-dark': darkMenu, 'layout-menu-container-inactive': !isMenuVisible() });

    return (
        <div className={containerClassName} onClick={onDocumentClick}>
            <div className="layout-wrapper-content">
                <AppTopBar topbarMenuActive={topbarMenuActive} profileMode={profileMode} horizontal={isHorizontal()} activeTopbarItem={activeTopbarItem}
                    onMenuButtonClick={onMenuButtonClick} onTopbarMenuButtonClick={onTopbarMenuButtonClick} onTopbarItemClick={onTopbarItemClick}></AppTopBar>

                <div className={menuClassName} onClick={onMenuClick}>
                    <div className="menu-scroll-content">
                        {profileMode === 'inline' && menuMode !== 'horizontal' && <AppInlineProfile onProfileClick={onProfileClick} expanded={profileExpanded}></AppInlineProfile>}

                        <AppMenu model={menu} menuMode={menuMode} active={menuActive} onMenuitemClick={onMenuitemClick} onRootMenuitemClick={onRootMenuitemClick}></AppMenu>
                    </div>
                </div>

                <div className="layout-main">
                    {
                        routers.map((router, index) => {
                            if (router.exact) {
                                return <Route key={`router${index}`} path={router.path} exact component={router.component} />
                            }

                            return <Route key={`router${index}`} path={router.path} component={router.component} />
                        })
                    }
                </div>

                <AppConfig configActive={configActive} menuMode={menuMode} onMenuModeChange={onMenuModeChange} darkMenu={darkMenu} onMenuColorChange={onMenuColorChange}
                    profileMode={profileMode} onProfileModeChange={onProfileModeChange} onConfigClick={onConfigClick} onConfigButtonClick={onConfigButtonClick}
                    layout={layout} onLayoutColorChange={onLayoutColorChange} theme={theme} onThemeChange={onThemeChange}
                    rippleActive={ripple} onRippleChange={onRippleChange} inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}></AppConfig>

                <div className="layout-mask modal-in"></div>

            </div>
        </div>
    );
}

export default DashboardApp;
