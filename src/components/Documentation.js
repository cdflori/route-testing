import React from 'react';
import AppCodeHighlight from '../AppCodeHighlight';

export const Documentation = () => {
    return (
        <div className="ui-g">
            <div className="ui-g-12">
                <div className="card docs">
                    <h5>Current Version</h5>
                    <p>React 17.x and PrimeReact 6.x</p>

                    <h5>Getting Started</h5>
                    <p>Avalon is an application template for React based on the popular <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> that allows
                            creating React apps with no configuration. To get started extract the contents of the zip bundle and install the dependencies
                            with npm or yarn.</p>
<AppCodeHighlight>
{`
"npm install" or "yarn"
`}
</AppCodeHighlight>

                    <p>Next step is running the application using the start script and navigate to <b>http://localhost:3000/</b> to view the application.
                            That is it, you may now start with the development of your application using the Avalon template.</p>

<AppCodeHighlight>
{`
"npm start" or "yarn start"
`}
</AppCodeHighlight>

                    <p>That is it, you may now start with the development of your application using the Avalon template.</p>

                    <h4>React Scripts</h4>
                    <p>Following commands are derived from create-app-app.</p>
<AppCodeHighlight>
{`
"npm start" or "yarn start": Starts the development server
"npm test" or "yarn test": Runs the tests.
"npm run build" or "yarn run build": Creates a production build.
`}
</AppCodeHighlight>

                    <h5>Structure</h5>
                    <p>Avalon consists of 3 main parts; the application layout, layout resources and theme resources for PrimeReact components. <b>App.js</b> inside src folder is the main component containing the template for the base layout
                            whereas required resources for the layout are placed inside the <b>public/assets/layout</b> folder and similarly theme resources are inside <b>public/assets/theme</b> folder.</p>

                    <h5>Template</h5>
                    <p>Main layout is the JSX of the App.js, it is divided into a couple of child components such as topbar, profile, menu and footer. Here is render method of the
                        App.js component that implements the logic such as menu state, layout modes and so on.</p>

<AppCodeHighlight>
{`
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
            // routers
        </div>

        <AppConfig configActive={configActive} menuMode={menuMode} onMenuModeChange={onMenuModeChange} darkMenu={darkMenu} onMenuColorChange={onMenuColorChange}
            profileMode={profileMode} onProfileModeChange={onProfileModeChange} onConfigClick={onConfigClick} onConfigButtonClick={onConfigButtonClick}
            layout={layout} onLayoutColorChange={onLayoutColorChange} theme={theme} onThemeChange={onThemeChange}
            rippleActive={ripple} onRippleChange={onRippleChange} inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}></AppConfig>

        <div className="layout-mask modal-in"></div>

        <AppFooter />
    </div>
</div>
`}
</AppCodeHighlight>

                    <h5>Menu</h5>
                    <p>Menu is a separate component defined in AppMenu.js file based on PrimeReact MenuModel API. In order to define the menuitems,
                    navigate to createMenu() method App.js file and define your own model as a nested structure. Here is the menu component from the demo application.
                            Notice that menu object is bound to the model property of AppMenu component as shown above.</p>

<div style={{ overflow: 'auto', height: '400px' }}>
<AppCodeHighlight lang="js">
{`
 const menu = [
    {
        label: 'Dashboards', icon: 'pi pi-fw pi-home',
        items: [
            { label: 'Generic', icon: 'pi pi-fw pi-home', to: '/dashboards/generic' },
            { label: 'Banking', icon: 'pi pi-fw pi-money-bill', to: '/dashboards/dashboard_banking' },
        ]
    },
    {
        label: 'UI Kit', icon: 'pi pi-fw pi-sitemap',
        items: [
            { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
            { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input' },
            { label: "Float Label", icon: "pi pi-fw pi-bookmark", to: '/floatlabel' },
            { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button', className: 'rotated-icon' },
            { label: 'Table', icon: 'pi pi-fw pi-table', to: '/table' },
            { label: 'List', icon: 'pi pi-fw pi-list', to: '/list' },
            { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree' },
            { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel' },
            { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay' },
            { label: 'Media', icon: "pi pi-fw pi-image", to: '/media' },
            { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu' },
            { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages' },
            { label: 'File', icon: 'pi pi-fw pi-file', to: '/file' },
            { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart' },
            { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc' },
        ]
    },
    {
        label: 'Utilities', icon: 'pi pi-fw pi-globe',
        items: [
            { label: 'Display', icon: 'pi pi-fw pi-desktop', to: '/display' },
            { label: 'Elevation', icon: 'pi pi-fw pi-external-link', to: '/elevation' },
            { label: 'Flexbox', icon: 'pi pi-fw pi-directions', to: '/flexbox' },
            { label: 'Icons', icon: 'pi pi-fw pi-search', to: '/icons' },
            { label: 'Widgets', icon: 'pi pi-fw pi-star-o', to: '/widgets' },
            { label: 'Grid System', icon: 'pi pi-fw pi-th-large', to: '/grid' },
            { label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', to: '/spacing' },
            { label: 'Typography', icon: 'pi pi-fw pi-align-center', to: '/typography' },
            { label: 'Text', icon: 'pi pi-fw pi-pencil', to: '/text' },
        ]
    },
    {
        label: 'Pages', icon: 'pi pi-fw pi-clone',
        items: [
            { label: 'Crud', icon: 'pi pi-fw pi-pencil', to: '/crud' },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar' },
            { label: 'Landing', icon: 'pi pi-fw pi-user-plus', url: 'assets/pages/landing.html', target: '_blank' },
            { label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login' },
            { label: 'Invoice', icon: 'pi pi-fw pi-dollar', to: '/invoice' },
            { label: 'Wizard', icon: 'pi pi-fw pi-star', to: '/wizard' },
            { label: 'Help', icon: 'pi pi-fw pi-question-circle', to: '/help' },
            { label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error' },
            { label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', to: '/notfound' },
            { label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access' },
            { label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty' }
        ]
    },
    {
        label: 'Hierarchy', icon: 'pi pi-fw pi-align-left',
        items: [
            {
                label: 'Submenu 1', icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Submenu 1.1', icon: 'pi pi-fw pi-align-left',
                        items: [
                            { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left' },
                            { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left' },
                            { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left' },
                        ]
                    },
                    {
                        label: 'Submenu 1.2', icon: 'pi pi-fw pi-align-left',
                        items: [
                            { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left' },
                            { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-align-left' }
                        ]
                    },
                ]
            },
            {
                label: 'Submenu 2', icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Submenu 2.1', icon: 'pi pi-fw pi-align-left',
                        items: [
                            { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left' },
                            { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left' },
                            { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-align-left' },
                        ]
                    },
                    {
                        label: 'Submenu 2.2', icon: 'pi pi-fw pi-align-left',
                        items: [
                            { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left' },
                            { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-align-left' }
                        ]
                    },
                ]
            }
        ]
    },
    { label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', command: () => window.open("https://www.primefaces.org/store", "_blank") },
    { label: 'Docs', icon: 'pi pi-fw pi-info-circle', to: '/documentation' },
];
`}
</AppCodeHighlight>
</div>

                    <h5>Component Theme</h5>
                    <p>Avalon provides 30 PrimeReact themes out of the box, setup of a theme is simple as including the css of theme to your application. All themes are located inside are located inside assets/theme folder.</p>

                    <ul>
                        <li>theme-amber</li>
                        <li>theme-blue</li>
                        <li>theme-brown</li>
                        <li>theme-cyan</li>
                        <li>theme-darkgrey</li>
                        <li>theme-deeppurple</li>
                        <li>theme-green</li>
                        <li>theme-indigo</li>
                        <li>theme-lightblue</li>
                        <li>theme-lightgreen</li>
                        <li>theme-lime</li>
                        <li>theme-orange</li>
                        <li>theme-pink</li>
                        <li>theme-purple</li>
                        <li>theme-teal</li>
                    </ul>

                    <p>A custom theme can be developed by the following steps.</p>
                    <ul>
                        <li>Choose a custom theme name such as theme-myown.</li>
                        <li>Create a file named theme-myown.scss under <i>public/assets/theme folder</i>.</li>
                        <li>Define the variables listed below and import the <i>../sass/theme/_theme.scss</i> file.</li>
                        <li>Build the scss to generate css</li>
                        <li>Include the generated theme.css in your application.</li>
                    </ul>

                    <p>Here are the variables required to create a theme.</p>

<AppCodeHighlight lang="scss">
{`
$primaryLightColor: rgba(38,143,255,.5);
$primaryColor: #007bff;
$primaryDarkColor: #0069d9;
$primaryDarkerColor: #0062cc;
$primaryTextColor: #ffffff;

$highlightBg: $primaryColor;
$highlightTextColor: $primaryTextColor;

@import '../sass/theme/_theme';
`}
</AppCodeHighlight>

                    <p> An example sass command to compile the css would be;</p>

<AppCodeHighlight>
{`
sass public/assets/theme/mytheme/theme.scss:public/assets/theme/mytheme/theme.css
`}
</AppCodeHighlight>

                    <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command
                            so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>

<AppCodeHighlight>
{`
sass --watch public/assets:public/assets
`}
</AppCodeHighlight>

                    <h4>Layout Theme</h4>
                    <p>Avalon offers 25 layout themes out of the box, setup of a layout theme simple including the css of theme to your page that is located inside public/assets/layout/css folder.</p>

                    <strong>Flat Colors</strong>
                    <ul>
                        <li>layout-amber</li>
                        <li>layout-blue</li>
                        <li>layout-brown</li>
                        <li>layout-cyan</li>
                        <li>layout-darkgrey</li>
                        <li>layout-deeppurple</li>
                        <li>layout-green</li>
                        <li>layout-indigo</li>
                        <li>layout-lightblue</li>
                        <li>layout-lightgreen</li>
                        <li>layout-lime</li>
                        <li>layout-orange</li>
                        <li>layout-pink</li>
                        <li>layout-purple</li>
                        <li>layout-teal</li>
                    </ul>

                    <strong>Special Themes</strong>
                    <ul>
                        <li>Influenza</li>
                        <li>Calm</li>
                        <li>Crimson</li>
                        <li>Night</li>
                        <li>Skyline</li>
                        <li>Sunkist</li>
                        <li>Little Leaf</li>
                        <li>Joomla</li>
                        <li>Firewatch</li>
                        <li>Suzy</li>
                    </ul>

                    <p>A custom layout theme can be developed by the following steps.</p>
                    <ul>
                        <li>Choose a layout name such as layout-myown.</li>
                        <li>Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.</li>
                        <li>Define the variables listed below and import the <i>/sass/layout/_layout.scss</i> file.</li>
                        <li>Build the scss to generate css</li>
                        <li>Serve the css by importing it using a link tag or a bundler.</li>
                    </ul>

                    <p>Here are the variables required to create a layout.</p>

<AppCodeHighlight lang="scss">
{`
$topbarLeftGradientStartBgColor:#146fd7;
$topbarLeftGradientEndBgColor:#146fd7;
$topbarRightGradientStartBgColor:#146fd7;
$topbarRightGradientEndBgColor:#146fd7;
$topbarTextColor:#ffffff;
$menuGradientStartBgColor:#ffffff;
$menuGradientEndBgColor:#ffffff;
$menuitemHoverBgColor:#e8e8e8;
$menuitemActiveColor:#007bff;
$menuitemActiveBgColor:#e8e8e8;
$menuButtonBgColor:#ffffff;
$menuButtonColor:#007bff;
$badgeBgColor:#ffc107;
$badgeColor:#282b30;
$darkMenuGradientStartBgColor:#363a41;
$darkMenuGradientEndBgColor:#363a41;
$darkMenuHoverBgColor:#4a4d54;
$darkMenuMenuitemColor:#ffffff;
$darkMenuMenuitemActiveColor:#6aa5d8;
$darkMenuMenuitemActiveBgColor:#282b30;

@import '../../sass/layout/_layout';
`}
</AppCodeHighlight>

                    <h4>Common SASS Variables</h4>
                    <p>In case you'd like to customize common variables, the _variables.scss under sass/layout or sass/theme folder is where the core variables (e.g. font size, paddings) for the layout are defined.</p>

                    <h6>sass/layout/_variables.scss</h6>
<AppCodeHighlight lang="scss">
{`
$fontFamily:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
$fontSize:14px;
$textColor:#212529;
$textSecondaryColor:#6c757d;
$borderRadius:4px;
$dividerColor:#dee2e6;
$transitionDuration:.3s;
$disabledBgColor:#eeeeee;
$primeIconFontSize:1.286em;

/* Predefined Colors */
$lightestGray:#f5f5f5;
$lightGray:#cccccc;
$gray:#999999;
$darkGray:#777777;
$white:#ffffff;

$blue:#007bff;
$purple:#9189fd;
$orange:#ffbf79;
$lightBlue:#8dc8ff;
$pink:#f790c8;
$indigo:#6610f2;
$green:#3e9018;
$red:#da2f31;
$orange:#ffb200;
$teal:#599597;
$black:#000000;
$yellow:#ffd644;

$inputInvalidBorderColor:#b94a48;
$inputInvalidBgColor:#ffffff;

$menuHoverBgColor: #f4f4f4;
$bodyBgColor: #EEF2F6;
`}
</AppCodeHighlight>

                    <h6>sass/theme/_variables.scss</h6>
<div style={{ overflow: 'auto', height: '400px' }}>
<AppCodeHighlight lang="scss">
{`
//reused color variables
$shade000:#ffffff;              //surface
$shade100:#efefef;              //header background
$shade200:#e9ecef;              //hover background
$shade300:#dee2e6;              //border, divider
$shade400:#ced4da;              //input border
$shade500:#adb5bd;              //unused
$shade600:#6c757d;              //text secondary color
$shade700:#495057;              //input text color
$shade800:#343a40;              //unused
$shade900:#212529;              //text color

//global
$fontFamily:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
$fontSize:1rem;
$fontWeight:normal;
$textColor:$shade900;
$textSecondaryColor:$shade600;
$borderRadius:4px;
$transitionDuration:.15s;
$formElementTransition:background-color $transitionDuration, border-color $transitionDuration, box-shadow $transitionDuration;
$actionIconTransition:box-shadow $transitionDuration;
$listItemTransition:box-shadow $transitionDuration;
$primeIconFontSize:1rem;
$divider:1px solid $shade300;
$inlineSpacing:.5rem;
$disabledOpacity:.65;
$maskBg:rgba(0, 0, 0, 0.4);
$loadingIconFontSize:2rem;
$errorColor:#dc3545;

//scale
$scaleSM:0.875;
$scaleLG:1.25;

//focus
$focusOutlineColor:$primaryLightColor;
$focusOutline:0 none;
$focusOutlineOffset:0;
$focusShadow:0 0 0 0.2rem $focusOutlineColor;

//action icons
$actionIconWidth:2rem;
$actionIconHeight:2rem;
$actionIconBg:transparent;
$actionIconBorder:0 none;
$actionIconColor:$shade600;
$actionIconHoverBg:transparent;
$actionIconHoverBorderColor:transparent;
$actionIconHoverColor:$shade700;
$actionIconBorderRadius:50%;

//input field (e.g. inputtext, spinner, inputmask)
$inputPadding:.5rem .75rem;
$inputTextFontSize:1rem;
$inputBg:$shade000;
$inputTextColor:$shade700;
$inputIconColor:$shade700;
$inputBorder:1px solid $shade400;
$inputHoverBorderColor:$shade400;
$inputFocusBorderColor:$primaryColor;
$inputErrorBorderColor:$errorColor;
$inputPlaceholderTextColor:$shade600;
$inputFilledBg:$shade100;
$inputFilledHoverBg:$shade100;
$inputFilledFocusBg:$shade100;

//input groups
$inputGroupBg:$shade200;
$inputGroupTextColor:$shade700;
$inputGroupAddOnMinWidth:2.357rem;

//input lists (e.g. dropdown, autocomplete, multiselect, orderlist)
$inputListBg:$shade000;
$inputListTextColor:$shade900;
$inputListBorder:$inputBorder;
$inputListPadding:.5rem 0;
$inputListItemPadding:.5rem 1.5rem;
$inputListItemBg:transparent;
$inputListItemTextColor:$shade900;
$inputListItemHoverBg:$shade200;
$inputListItemTextHoverColor:$shade900;
$inputListItemBorder:0 none;
$inputListItemBorderRadius:0;
$inputListItemMargin:0;
$inputListItemFocusShadow:inset 0 0 0 0.15rem $focusOutlineColor;
$inputListHeaderPadding:.75rem 1.5rem;
$inputListHeaderMargin:0;
$inputListHeaderBg:$shade100;
$inputListHeaderTextColor:$shade900;
$inputListHeaderBorder:1px solid $shade300;

//inputs with overlays (e.g. autocomplete, dropdown, multiselect)
$inputOverlayBg:$inputListBg;
$inputOverlayHeaderBg:$inputListHeaderBg;
$inputOverlayBorder:1px solid rgba(0,0,0,.15);
$inputOverlayShadow:none;

//password
$passwordMeterBg:$shade200;
$passwordWeakBg:#f8d7da;
$passwordMediumBg:#fff3cd;
$passwordStrongBg:#d4edda;

//button
$buttonPadding:.5rem .75rem;
$buttonIconOnlyWidth:2.357rem;
$buttonIconOnlyPadding:.5rem 0;
$buttonBg:$primaryColor;
$buttonTextColor:$primaryTextColor;
$buttonBorder:1px solid $primaryColor;
$buttonHoverBg:$primaryDarkColor;
$buttonTextHoverColor:$primaryTextColor;
$buttonHoverBorderColor:$primaryDarkColor;
$buttonActiveBg:$primaryDarkerColor;
$buttonTextActiveColor:$primaryTextColor;
$buttonActiveBorderColor:$primaryDarkerColor;
$raisedButtonShadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
$roundedButtonBorderRadius:2rem;

$textButtonHoverBgOpacity:.04;
$textButtonActiveBgOpacity:.16;
$outlinedButtonBorder:1px solid;
$plainButtonTextColor:$textSecondaryColor;
$plainButtonHoverBgColor:$shade200;
$plainButtonActiveBgColor:$shade300;

$secondaryButtonBg:#6c757d;
$secondaryButtonTextColor:#ffffff;
$secondaryButtonBorder:1px solid #6c757d;
$secondaryButtonHoverBg:#5a6268;
$secondaryButtonTextHoverColor:#ffffff;
$secondaryButtonHoverBorderColor:#5a6268;
$secondaryButtonActiveBg:#545b62;
$secondaryButtonTextActiveColor:#ffffff;
$secondaryButtonActiveBorderColor:#4e555b;
$secondaryButtonFocusShadow:0 0 0 0.2rem rgba(130,138,145,.5);

$infoButtonBg:#17a2b8;
$infoButtonTextColor:#ffffff;
$infoButtonBorder:1px solid #17a2b8;
$infoButtonHoverBg:#138496;
$infoButtonTextHoverColor:#ffffff;
$infoButtonHoverBorderColor:#117a8b;
$infoButtonActiveBg:#138496;
$infoButtonTextActiveColor:#ffffff;
$infoButtonActiveBorderColor:#117a8b;
$infoButtonFocusShadow:0 0 0 0.2rem rgba(58,176,195,.5);

$successButtonBg:#28a745;
$successButtonTextColor:#ffffff;
$successButtonBorder:1px solid #28a745;
$successButtonHoverBg:#218838;
$successButtonTextHoverColor:#ffffff;
$successButtonHoverBorderColor:#1e7e34;
$successButtonActiveBg:#1e7e34;
$successButtonTextActiveColor:#ffffff;
$successButtonActiveBorderColor:#1c7430;
$successButtonFocusShadow:0 0 0 0.2rem rgba(72,180,97,.5);

$warningButtonBg:#ffc107;
$warningButtonTextColor:#212529;
$warningButtonBorder:1px solid #ffc107;
$warningButtonHoverBg:#e0a800;
$warningButtonTextHoverColor:#212529;
$warningButtonHoverBorderColor:#d39e00;
$warningButtonActiveBg:#d39e00;
$warningButtonTextActiveColor:#212529;
$warningButtonActiveBorderColor:#c69500;
$warningButtonFocusShadow:0 0 0 0.2rem rgba(222,170,12,.5);

$helpButtonBg:#6f42c1;
$helpButtonTextColor:#ffffff;
$helpButtonBorder:1px solid #6f42c1;
$helpButtonHoverBg:#633bad;
$helpButtonTextHoverColor:#ffffff;
$helpButtonHoverBorderColor:#58349a;
$helpButtonActiveBg:#58349a;
$helpButtonTextActiveColor:#ffffff;
$helpButtonActiveBorderColor:#4d2e87;
$helpButtonFocusShadow:0 0 0 0.2rem #d3c6ec;

$dangerButtonBg:#dc3545;
$dangerButtonTextColor:#ffffff;
$dangerButtonBorder:1px solid #dc3545;
$dangerButtonHoverBg:#c82333;
$dangerButtonTextHoverColor:#ffffff;
$dangerButtonHoverBorderColor:#bd2130;
$dangerButtonActiveBg:#bd2130;
$dangerButtonTextActiveColor:#ffffff;
$dangerButtonActiveBorderColor:#b21f2d;
$dangerButtonFocusShadow:0 0 0 0.2rem rgba(225,83,97,.5);

$linkButtonColor:$primaryColor;
$linkButtonHoverColor:$primaryDarkColor;
$linkButtonTextHoverDecoration:underline;
$linkButtonFocusShadow:0 0 0 0.2rem $focusOutlineColor;

//checkbox
$checkboxWidth:20px;
$checkboxHeight:20px;
$checkboxBorder:2px solid $shade400;
$checkboxIconFontSize:14px;
$checkboxActiveBorderColor:$primaryColor;
$checkboxActiveBg:$primaryColor;
$checkboxIconActiveColor:$primaryTextColor;
$checkboxActiveHoverBg:$primaryDarkerColor;
$checkboxIconActiveHoverColor:$primaryTextColor;
$checkboxActiveHoverBorderColor:$primaryDarkerColor;

//radiobutton
$radiobuttonWidth:20px;
$radiobuttonHeight:20px;
$radiobuttonBorder:2px solid $shade400;
$radiobuttonIconSize:12px;
$radiobuttonActiveBorderColor:$primaryColor;
$radiobuttonActiveBg:$primaryColor;
$radiobuttonIconActiveColor:$primaryTextColor;
$radiobuttonActiveHoverBg:$primaryDarkerColor;
$radiobuttonIconActiveHoverColor:$primaryTextColor;
$radiobuttonActiveHoverBorderColor:$primaryDarkerColor;

//colorpicker
$colorPickerPreviewWidth:2rem;
$colorPickerPreviewHeight:2rem;
$colorPickerBg:#212529;
$colorPickerBorderColor:#212529;
$colorPickerHandleColor:$shade000;

//togglebutton
$toggleButtonBg:#6c757d;
$toggleButtonBorder:1px solid #6c757d;
$toggleButtonTextColor:#ffffff;
$toggleButtonIconColor:#ffffff;
$toggleButtonHoverBg:#5a6268;
$toggleButtonHoverBorderColor:#545b62;
$toggleButtonTextHoverColor:#ffffff;
$toggleButtonIconHoverColor:#ffffff;
$toggleButtonActiveBg:#545b62;
$toggleButtonActiveBorderColor:#4e555b;
$toggleButtonTextActiveColor:#ffffff;
$toggleButtonIconActiveColor:#ffffff;
$toggleButtonActiveHoverBg:#545b62;
$toggleButtonActiveHoverBorderColor:#4e555b;
$toggleButtonTextActiveHoverColor:#ffffff;
$toggleButtonIconActiveHoverColor:#ffffff;

//inplace
$inplacePadding:$inputPadding;
$inplaceHoverBg:$shade200;
$inplaceTextHoverColor:$shade900;

//rating
$ratingIconFontSize:1.143rem;
$ratingCancelIconColor:#dc3545;
$ratingCancelIconHoverColor:#dc3545;
$ratingStarIconOffColor:$shade700;
$ratingStarIconOnColor:$primaryColor;
$ratingStarIconHoverColor:$primaryColor;

//slider
$sliderBg:$shade200;
$sliderBorder:0 none;
$sliderHorizontalHeight:.286rem;
$sliderVerticalWidth:0.286rem;
$sliderHandleWidth:1.143rem;
$sliderHandleHeight:1.143rem;
$sliderHandleBg:$primaryColor;
$sliderHandleBorder:2px solid $primaryColor;
$sliderHandleBorderRadius:$borderRadius;
$sliderHandleHoverBorderColor:$primaryDarkColor;
$sliderHandleHoverBg:$primaryDarkColor;
$sliderRangeBg:$primaryColor;

//calendar
$calendarTableMargin:.5rem 0;
$calendarPadding:0;
$calendarBg:$shade000;
$calendarInlineBg:$calendarBg;
$calendarTextColor:$shade900;
$calendarBorder:$inputListBorder;
$calendarOverlayBorder:$inputOverlayBorder;

$calendarHeaderPadding:.5rem;
$calendarHeaderBg:$shade100;
$calendarInlineHeaderBg:$calendarBg;
$calendarHeaderBorder:1px solid $shade300;
$calendarHeaderTextColor:$shade900;
$calendarHeaderFontWeight:600;
$calendarHeaderCellPadding:.5rem;

$calendarCellDatePadding:.5rem;
$calendarCellDateWidth:2.5rem;
$calendarCellDateHeight:2.5rem;
$calendarCellDateBorderRadius:$borderRadius;
$calendarCellDateBorder:1px solid transparent;
$calendarCellDateHoverBg:$shade200;
$calendarCellDateTodayBg:$shade400;
$calendarCellDateTodayBorderColor:transparent;
$calendarCellDateTodayTextColor:$shade900;

$calendarButtonBarPadding:1rem 0;
$calendarTimePickerPadding:.5rem;
$calendarTimePickerElementPadding:0 .5rem;
$calendarTimePickerTimeFontSize:1.25rem;

$calendarBreakpoint:769px;
$calendarCellDatePaddingSM:0;

//input switch
$inputSwitchWidth:3rem;
$inputSwitchHeight:1.75rem;
$inputSwitchBorderRadius:$borderRadius;
$inputSwitchHandleWidth:1.250rem;
$inputSwitchHandleHeight:1.250rem;
$inputSwitchHandleBorderRadius:$borderRadius;
$inputSwitchSliderPadding:.25rem;
$inputSwitchSliderOffBg:$shade400;
$inputSwitchHandleOffBg:$shade000;
$inputSwitchSliderOffHoverBg:$shade400;
$inputSwitchSliderOnBg:$primaryColor;
$inputSwitchSliderOnHoverBg:$primaryColor;
$inputSwitchHandleOnBg:$shade000;

//panel
$panelHeaderBorder:1px solid $shade300;
$panelHeaderBg:$shade100;
$panelHeaderTextColor:$shade900;
$panelHeaderFontWeight:600;
$panelHeaderPadding:1rem 1.25rem;
$panelToggleableHeaderPadding:.5rem 1.25rem;

$panelHeaderHoverBg:$shade200;
$panelHeaderHoverBorderColor:$shade300;
$panelHeaderTextHoverColor:$shade900;

$panelContentBorder:1px solid $shade300;
$panelContentBg:$shade000;
$panelContentTextColor:$shade900;
$panelContentPadding:1.25rem;

$panelFooterBorder:1px solid $shade300;
$panelFooterBg:$shade000;
$panelFooterTextColor:$shade900;
$panelFooterPadding:.5rem 1.25rem;

//accordion
$accordionSpacing:0;
$accordionHeaderBorder:$panelHeaderBorder;
$accordionHeaderBg:$panelHeaderBg;
$accordionHeaderTextColor:$panelHeaderTextColor;
$accordionHeaderFontWeight:$panelHeaderFontWeight;
$accordionHeaderPadding:$panelHeaderPadding;

$accordionHeaderHoverBg:$shade200;
$accordionHeaderHoverBorderColor:$shade300;
$accordionHeaderTextHoverColor:$shade900;

$accordionHeaderActiveBg:$panelHeaderBg;
$accordionHeaderActiveBorderColor:$shade300;
$accordionHeaderTextActiveColor:$shade900;

$accordionHeaderActiveHoverBg:$shade200;
$accordionHeaderActiveHoverBorderColor:$shade300;
$accordionHeaderTextActiveHoverColor:$shade900;

$accordionContentBorder:$panelContentBorder;
$accordionContentBg:$panelContentBg;
$accordionContentTextColor:$panelContentTextColor;
$accordionContentPadding:$panelContentPadding;

//tabview
$tabviewNavBorder:1px solid #dee2e6;
$tabviewNavBorderWidth:0 0 1px 0;
$tabviewNavBg:transparent;

$tabviewHeaderSpacing:0;
$tabviewHeaderBorder:solid;
$tabviewHeaderBorderWidth:1px;
$tabviewHeaderBorderColor:$shade000 $shade000 #dee2e6 $shade000;
$tabviewHeaderBg:$shade000;
$tabviewHeaderTextColor:$shade600;
$tabviewHeaderFontWeight:$panelHeaderFontWeight;
$tabviewHeaderPadding:.75rem 1rem;
$tabviewHeaderMargin:0 0 -1px 0;

$tabviewHeaderHoverBg:$shade000;
$tabviewHeaderHoverBorderColor:#dee2e6;
$tabviewHeaderTextHoverColor:$shade600;

$tabviewHeaderActiveBg:$shade000;
$tabviewHeaderActiveBorderColor:#dee2e6 #dee2e6 $shade000 #dee2e6;
$tabviewHeaderTextActiveColor:$shade700;

$tabviewContentBorder:0 none;
$tabviewContentBg:$panelContentBg;
$tabviewContentTextColor:$panelContentTextColor;
$tabviewContentPadding:$panelContentPadding;

//upload
$fileUploadProgressBarHeight:.25rem;
$fileUploadContentPadding:2rem 1rem;

//scrollpanel
$scrollPanelTrackBorder:0 none;
$scrollPanelTrackBg:$shade100;

//card
$cardBodyPadding:1.5rem;
$cardTitleFontSize:1.5rem;
$cardTitleFontWeight:700;
$cardSubTitleFontWeight:400;
$cardSubTitleColor:$shade600;
$cardContentPadding:1rem 0;
$cardFooterPadding:1rem 0 0 0;
$cardShadow:0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);

//editor
$editorToolbarBg:$panelHeaderBg;
$editorToolbarBorder:$panelHeaderBorder;
$editorToolbarPadding:$panelHeaderPadding;
$editorToolbarIconColor:$textSecondaryColor;
$editorToolbarIconHoverColor:$textColor;
$editorIconActiveColor:$primaryColor;
$editorContentBorder:$panelContentBorder;
$editorContentBg:$panelContentBg;

//paginator
$paginatorBg:$shade000;
$paginatorTextColor:$primaryColor;
$paginatorBorder:solid $shade300;
$paginatorBorderWidth:0;
$paginatorPadding:.75rem;
$paginatorElementWidth:$buttonIconOnlyWidth;
$paginatorElementHeight:$buttonIconOnlyWidth;
$paginatorElementBg:$shade000;
$paginatorElementBorder:1px solid #dee2e6;
$paginatorElementIconColor:$primaryColor;
$paginatorElementHoverBg:$shade200;
$paginatorElementHoverBorderColor:#dee2e6;
$paginatorElementIconHoverColor:$primaryColor;
$paginatorElementBorderRadius:0;
$paginatorElementMargin:0 0 0 -1px;
$paginatorElementPadding:0;

//table
$tableHeaderBorder:solid #dee2e6;
$tableHeaderBorderWidth:1px 0 0 0;
$tableHeaderBg:$shade100;
$tableHeaderTextColor:$shade900;
$tableHeaderFontWeight:600;
$tableHeaderPadding:1rem 1rem;

$tableHeaderCellPadding:1rem 1rem;
$tableHeaderCellBg:$shade000;
$tableHeaderCellTextColor:$shade900;
$tableHeaderCellFontWeight:600;
$tableHeaderCellBorder:1px solid #dee2e6;
$tableHeaderCellBorderWidth:1px 0 2px 0;
$tableHeaderCellHoverBg:$shade200;
$tableHeaderCellTextHoverColor:$shade900;
$tableHeaderCellIconColor:$shade600;
$tableHeaderCellIconHoverColor:$shade600;
$tableHeaderCellHighlightBg:$shade000;
$tableHeaderCellHighlightTextColor:$primaryColor;
$tableHeaderCellHighlightHoverBg:$shade200;
$tableHeaderCellHighlightTextHoverColor:$primaryColor;
$tableSortableColumnBadgeSize:1.143rem;

$tableBodyRowBg:$shade000;
$tableBodyRowTextColor:$shade900;
$tableBodyRowEvenBg:rgba(0,0,0,.05);
$tableBodyRowHoverBg:$shade200;
$tableBodyRowTextHoverColor:$shade900;
$tableBodyCellBorder:1px solid #dee2e6;
$tableBodyCellBorderWidth:1px 0 0 0;
$tableBodyCellPadding:1rem 1rem;

$tableFooterCellPadding:1rem 1rem;
$tableFooterCellBg:$shade000;
$tableFooterCellTextColor:$shade900;
$tableFooterCellFontWeight:600;
$tableFooterCellBorder:1px solid #dee2e6;
$tableFooterCellBorderWidth:1px 0 1px 0;
$tableResizerHelperBg:$primaryColor;

$tableFooterBorder:1px solid #dee2e6;
$tableFooterBorderWidth:1px 0 1px 0;
$tableFooterBg:$shade100;
$tableFooterTextColor:$shade900;
$tableFooterFontWeight:600;
$tableFooterPadding:1rem 1rem;

$tableCellContentAlignment:left;
$tableTopPaginatorBorderWidth:1px 0 0 0;
$tableBottomPaginatorBorderWidth:1px 0 0 0;

$tableScaleSM:0.5;
$tableScaleLG:1.25;

//dataview
$dataViewContentPadding:0;
$dataViewContentBorder:0 none;
$dataViewListItemBorder:1px solid $shade300;
$dataViewListItemBorderWidth:1px 0 0 0;

//orderlist, picklist
$orderListBreakpoint:769px;
$pickListBreakpoint:769px;

//schedule
$fullCalendarEventBg:$primaryDarkColor;
$fullCalendarEventBorder:1px solid $primaryDarkColor;
$fullCalendarEventTextColor:$primaryTextColor;

//tree
$treeContainerPadding:0.286rem;
$treeNodePadding:0.143rem;
$treeNodeContentPadding:.5rem;
$treeNodeChildrenPadding:0 0 0 1rem;
$treeNodeIconColor:$shade600;

//timeline
$timelineVerticalEventContentPadding:0 1rem !default;
$timelineHorizontalEventContentPadding:1rem 0 !default;
$timelineEventMarkerWidth:1rem !default;
$timelineEventMarkerHeight:1rem !default;
$timelineEventMarkerBorderRadius:50% !default;
$timelineEventMarkerBorder:0 none !default;
$timelineEventMarkerBackground:$primaryColor !default;
$timelineEventConnectorSize:2px !default;
$timelineEventColor:$shade300 !default;

//org chart
$organizationChartConnectorColor:$shade300;

//message
$messageMargin:1rem 0;
$messagePadding:1rem 1.25rem;
$messageBorderWidth:1px;
$messageIconFontSize:1.5rem;
$messageTextFontSize:1rem;
$messageTextFontWeight:500;

//inline message
$inlineMessagePadding:$inputPadding;
$inlineMessageMargin:0;
$inlineMessageIconFontSize:1rem;
$inlineMessageTextFontSize:1rem;
$inlineMessageBorderWidth:0px;

//toast
$toastIconFontSize:2rem;
$toastMessageTextMargin:0 0 0 1rem;
$toastMargin:0 0 1rem 0;
$toastPadding:1rem;
$toastBorderWidth:0;
$toastShadow:0 0.25rem 0.75rem rgba(0,0,0,.1);
$toastOpacity:1;
$toastTitleFontWeight:700;
$toastDetailMargin:$inlineSpacing 0 0 0;

//severities
$infoMessageBg:#cce5ff;
$infoMessageBorder:solid #b8daff;
$infoMessageTextColor:#004085;
$infoMessageIconColor:#004085;
$successMessageBg:#d4edda;
$successMessageBorder:solid #c3e6cb;
$successMessageTextColor:#155724;
$successMessageIconColor:#155724;
$warningMessageBg:#fff3cd;
$warningMessageBorder:solid #ffeeba;
$warningMessageTextColor:#856404;
$warningMessageIconColor:#856404;
$errorMessageBg:#f8d7da;
$errorMessageBorder:solid #f5c6cb;
$errorMessageTextColor:#721c24;
$errorMessageIconColor:#721c24;

//overlays
$overlayContentBorder:1px solid rgba(0,0,0,.2);
$overlayContentBg:$panelContentBg;
$overlayContainerShadow:none;

//dialog
$dialogHeaderBg:$shade000;
$dialogHeaderBorder:1px solid $shade200;
$dialogHeaderTextColor:$shade900;
$dialogHeaderFontWeight:600;
$dialogHeaderFontSize:1.25rem;
$dialogHeaderPadding:1rem;
$dialogContentPadding:1rem;
$dialogFooterBorder:1px solid $shade200;
$dialogFooterPadding:1rem;

//tooltip
$tooltipBg:$shade900;
$tooltipTextColor:$shade000;
$tooltipPadding:$inputPadding;

//steps
$stepsItemBg:transparent;
$stepsItemBorder:1px solid $shade300;
$stepsItemTextColor:$shade600;
$stepsItemNumberWidth:2rem;
$stepsItemNumberHeight:2rem;
$stepsItemNumberFontSize:1.143rem;
$stepsItemNumberColor:$shade900;
$stepsItemNumberBorderRadius:$borderRadius;
$stepsItemActiveFontWeight:600;

//progressbar
$progressBarHeight:1.5rem;
$progressBarBorder:0 none;
$progressBarBg:$shade200;
$progressBarValueBg:$primaryColor;

//menu (e.g. menu, menubar, tieredmenu)
$menuWidth:12.5rem;
$menuBg:$shade000;
$menuBorder:1px solid $shade300;
$menuTextColor:$shade900;
$menuitemPadding:.75rem 1rem;
$menuitemBorderRadius:0;
$menuitemTextColor:$shade900;
$menuitemIconColor:$shade900;
$menuitemTextHoverColor:$shade900;
$menuitemIconHoverColor:$shade900;
$menuitemHoverBg:$shade200;
$menuitemTextActiveColor:$shade900;
$menuitemIconActiveColor:$shade900;
$menuitemActiveBg:$shade200;
$menuitemSubmenuIconFontSize:.875rem;
$submenuHeaderMargin:0;
$submenuHeaderPadding:.75rem 1rem;
$submenuHeaderBg:$shade000;
$submenuHeaderTextColor:$shade900;
$submenuHeaderBorderRadius:0;
$submenuHeaderFontWeight:600;
$overlayMenuBg:$menuBg;
$overlayMenuBorder:1px solid rgba(0,0,0,.15);
$overlayMenuShadow:none;
$verticalMenuPadding:.5rem 0;
$menuSeparatorMargin:.5rem 0;

$breadcrumbPadding:1rem;
$breadcrumbBg:$shade100;
$breadcrumbBorder:0 none;
$breadcrumbItemTextColor:$primaryColor;
$breadcrumbItemIconColor:$primaryColor;
$breadcrumbLastItemTextColor:$shade600;
$breadcrumbLastItemIconColor:$shade600;
$breadcrumbSeparatorColor:$shade600;

$horizontalMenuPadding:.5rem 1rem;
$horizontalMenuBg:$shade100;
$horizontalMenuBorder:0 none;
$horizontalMenuTextColor:rgba(0,0,0,.9);
$horizontalMenuRootMenuitemPadding:1rem;
$horizontalMenuRootMenuitemBorderRadius:$borderRadius;
$horizontalMenuRootMenuitemTextColor:rgba(0,0,0,.5);
$horizontalMenuRootMenuitemIconColor:rgba(0,0,0,.5);
$horizontalMenuRootMenuitemTextHoverColor:rgba(0,0,0,.7);
$horizontalMenuRootMenuitemIconHoverColor:rgba(0,0,0,.7);
$horizontalMenuRootMenuitemHoverBg:transparent;
$horizontalMenuRootMenuitemTextActiveColor:rgba(0,0,0,.9);
$horizontalMenuRootMenuitemIconActiveColor:rgba(0,0,0,.9);
$horizontalMenuRootMenuitemActiveBg:transparent;

//badge and tag
$badgeBg:$primaryColor;
$badgeTextColor:$primaryTextColor;
$badgeMinWidth:1.5rem;
$badgeHeight:1.5rem;
$badgeFontWeight:700;
$badgeFontSize:.75rem;

$tagPadding:.25rem .4rem;

//carousel
$carouselIndicatorsPadding:1rem;
$carouselIndicatorBg:$shade200;
$carouselIndicatorHoverBg:$shade300;
$carouselIndicatorBorderRadius:0;
$carouselIndicatorWidth:2rem;
$carouselIndicatorHeight:.5rem;

//galleria
$galleriaMaskBg:rgba(0,0,0,0.9);
$galleriaCloseIconMargin:.5rem;
$galleriaCloseIconFontSize:2rem;
$galleriaCloseIconBg:transparent;
$galleriaCloseIconColor:$shade100;
$galleriaCloseIconHoverBg:rgba(255,255,255,0.1);
$galleriaCloseIconHoverColor:$shade100;
$galleriaCloseIconWidth:4rem;
$galleriaCloseIconHeight:4rem;
$galleriaCloseIconBorderRadius:$borderRadius;

$galleriaItemNavigatorBg:transparent;
$galleriaItemNavigatorColor:$shade100;
$galleriaItemNavigatorMargin:0 .5rem;
$galleriaItemNavigatorFontSize:2rem;
$galleriaItemNavigatorHoverBg:rgba(255,255,255,0.1);
$galleriaItemNavigatorHoverColor:$shade100;
$galleriaItemNavigatorWidth:4rem;
$galleriaItemNavigatorHeight:4rem;
$galleriaItemNavigatorBorderRadius:$borderRadius;

$galleriaCaptionBg:rgba(0,0,0,.5);
$galleriaCaptionTextColor:$shade100;
$galleriaCaptionPadding:1rem;

$galleriaIndicatorsPadding:1rem;
$galleriaIndicatorBg:$shade200;
$galleriaIndicatorHoverBg:$shade300;
$galleriaIndicatorBorderRadius:$borderRadius;
$galleriaIndicatorWidth:1rem;
$galleriaIndicatorHeight:1rem;
$galleriaIndicatorsBgOnItem:rgba(0,0,0,.5);
$galleriaIndicatorBgOnItem:rgba(255,255,255,.4);
$galleriaIndicatorHoverBgOnItem:rgba(255,255,255,.6);

$galleriaThumbnailContainerBg:rgba(0,0,0,.9);
$galleriaThumbnailContainerPadding:1rem .25rem;
$galleriaThumbnailNavigatorBg:transparent;
$galleriaThumbnailNavigatorColor:$shade100;
$galleriaThumbnailNavigatorHoverBg:rgba(255,255,255,0.1);
$galleriaThumbnailNavigatorHoverColor:$shade100;
$galleriaThumbnailNavigatorBorderRadius:$borderRadius;
$galleriaThumbnailNavigatorWidth:2rem;
$galleriaThumbnailNavigatorHeight:2rem;

:root {
	--surface-a:#{$shade000};
	--surface-b:#{$shade100};
	--surface-c:#{$shade200};
	--surface-d:#{$shade300};
	--surface-e:#{$shade000};
	--surface-f:#{$shade000};
	--text-color:#{$shade900};
	--text-color-secondary:#{$shade600};
	--primary-color:#{$primaryColor};
	--primary-color-text:#{$primaryTextColor};
	--font-family:#{$fontFamily};
}
`}
</AppCodeHighlight>
</div>

                    <h4>Menu Modes</h4>
                    <p>Menu has 4 modes, <b>static</b>, <b>overlay</b>, <b>slim</b> and <b>horizontal</b>. Main layout container element in App.js is used to define which mode to use by adding specific classes. List
                            below indicates the style classes for each mode.</p>

                    <ul>
                        <li>Static: "layout-wrapper menu-layout-static"</li>
                        <li>Overlay: "layout-wrapper menu-layout-overlay"</li>
                        <li>Slim: "layout-wrapper menu-layout-static menu-layout-slim"</li>
                        <li>Horizontal: "layout-wrapper menu-layout-static menu-layout-horizontal"</li>
                    </ul>

                    <p>For example to create a horizontal menu, the div element should be in following form;</p>
<AppCodeHighlight>
{`
<div className="layout-wrapper menu-layout-static menu-layout-horizontal">
`}
</AppCodeHighlight>

                    <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample
                            application has an example implementation of such use case. Refer to App.js for an example.</p>

                    <h4>Dark Menu</h4>
                    <p>Default color scheme of menu is light and alternative dark mode can be activated by adding <i>layout-menu-dark</i> style class to the menu container.</p>
<AppCodeHighlight>
{`
<div className="layout-menu-container layout-menu-dark">
`}
</AppCodeHighlight>

                    <h4>Profile Modes</h4>
                    <p>There are two possible locations for the user profile menu, first option is inline located inside the main menu and second option is the topbar menu. For inline mode,
                    profile content should be placed above the menu and for inline mode content goes in topbar-items list. The sample demo application provides examples for
                            both cases.</p>

                    <h4>Grid CSS</h4>
                    <p>Avalon uses PrimeReact Flex Grid CSS throughout the demos such as Dashboard, however any Grid library can be used with it since Avalon Layout itself does not depend on PrimeFlex CSS.</p>

                    <h4>Customizing Styles</h4>
                    <p>It is suggested to add your customizations in the following sass files under the "sass/overrides" folder instead of adding them to the scss files under sass folder to avoid maintenance issues after an update.</p>

                    <ul>
                        <li><b>_layout_variables</b>: Variables of the layout.</li>
                        <li><b>_layout_styles</b>: Styles for the layout.</li>
                        <li><b>_theme_variables</b>: Variables of the theme.</li>
                        <li><b>_theme_styles</b>: Styles for the theme.</li>
                    </ul>

                    <h4>Migration Guide</h4>
                    <p>Every change is included in <b>CHANGELOG.md</b> file at the root folder of the distribution along with the instructions to update.</p>
                </div>
            </div>
        </div>
    )
}
