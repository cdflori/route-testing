import React from 'react';
import classNames from 'classnames';
import { RadioButton } from 'primereact/radiobutton';
import { InputSwitch } from 'primereact/inputswitch';

const AppConfig = (props) => {

    const themeColors = [
        { name: "Amber", file: "amber", color: "#F8BD0C" },
        { name: "Blue", file: "blue", color: "#007bff" },
        { name: "Cyan", file: "cyan", color: "#17A2B8" },
        { name: "Indigo", file: "indigo", color: "#6610F2" },
        { name: "Purple", file: "purple", color: "#883cae" },
        { name: "Teal", file: "teal", color: "#20C997" },
        { name: "Orange", file: "orange", color: "#FD7E14" },
        { name: "Deep Purple", file: "deeppurple", color: "#612FBE" },
        { name: "Light Blue", file: "lightblue", color: "#4DA3FF" },
        { name: "Green", file: "green", color: "#28A745" },
        { name: "Light Green", file: "lightgreen", color: "#61CC79" },
        { name: "Brown", file: "brown", color: "#986839" },
        { name: "Dark Grey", file: "darkgrey", color: "#6C757D" },
        { name: "Pink", file: "pink", color: "#E83E8C" },
        { name: "Lime", file: "lime", color: "#74CD32" },
    ];

    const layoutColors = [
        { name: "Blue", file: "blue", color1: "#146fd7", color2: "#146fd7" },
        { name: "Cyan", file: "cyan", color1: "#0A616F", color2: "#0D7A8B" },
        { name: "Indigo", file: "indigo", color1: "#470EA2", color2: "#510DBE" },
        { name: "Purple", file: "purple", color1: "#391F68", color2: "#4E2A8F" },
        { name: "Teal", file: "teal", color1: "#136E52", color2: "#13956E" },
        { name: "Pink", file: "pink", color1: "#771340", color2: "#B12D69" },
        { name: "Lime", file: "lime", color1: "#407916", color2: "#569D21" },
        { name: "Green", file: "green", color1: "#1F8E38", color2: "#1F8E38" },
        { name: "Amber", file: "amber", color1: "#7A5E06", color2: "#C5980F" },
        { name: "Brown", file: "brown", color1: "#593E22", color2: "#6F4925" },
        { name: "Orange", file: "orange", color1: "#904100", color2: "#CB5C00" },
        { name: "Deep Purple", file: "deeppurple", color1: "#341A64", color2: "#46208E" },
        { name: "Light Blue", file: "lightblue", color1: "#14569D", color2: "#2A7BD1" },
        { name: "Light Green", file: "lightgreen", color1: "#2E8942", color2: "#3EA655" },
        { name: "Dark Grey", file: "darkgrey", color1: "#343A40", color2: "#424A51" },
    ];

    const layoutSpecialColors = [
        { name: "Influenza", file: "influenza", color1: "#a83279", color2: "#f38e00" },
        { name: "Calm", file: "calm", color1: "#5f2c82", color2: "#0DA9A4" },
        { name: "Crimson", file: "crimson", color1: "#521c52", color2: "#c6426e" },
        { name: "Night", file: "night", color1: "#2c0747", color2: "#6441a5" },
        { name: "Skyline", file: "skyline", color1: "#2b32b2", color2: "#1488cc" },
        { name: "Sunkist", file: "sunkist", color1: "#ee8a21", color2: "#f2c94c" },
        { name: "Little Leaf", file: "littleleaf", color1: "#4DB865", color2: "#80D293" },
        { name: "Joomla", file: "joomla", color1: "#1e3c72", color2: "#2a5298" },
        { name: "Firewatch", file: "firewatch", color1: "#cb2d3e", color2: "#ef473a" },
        { name: "Suzy", file: "suzy", color1: "#834d9b", color2: "#d04ed6" },
    ];

    const onLayoutColorChange = (event, layout, special) => {
        props.onLayoutColorChange(layout);
        changeStyleSheetUrl('layout-css', layout, 'layout');

        if (special) {
            props.onMenuColorChange({ value: true });
        }

        event.preventDefault();
    };

    const onThemeChange = (theme) => {
        props.onThemeChange(theme);
        changeStyleSheetUrl('theme-css', theme, 'theme');
    };

    const onConfigButtonClick = (event) => {
        props.onConfigButtonClick(event);
        event.preventDefault();
    };

    const changeStyleSheetUrl = (id, value, prefix) => {
        let element = document.getElementById(id);
        let urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
        let newURL = urlTokens.join('/');

        replaceLink(element, newURL);
    };

    const replaceLink = (linkElement, href) => {
        if (isIE()) {
            linkElement.setAttribute("href", href);
        }
        else {
            const id = linkElement.getAttribute("id");
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute("href", href);
            cloneLinkElement.setAttribute("id", id + "-clone");

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener("load", () => {
                linkElement.remove();
                cloneLinkElement.setAttribute("id", id);
            });
        }
    };

    const isIE = () => {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    };

    const getFlatLayoutColors = () => {
        return (
            <div className="layout-themes">
                {
                    layoutColors.map(l => {
                        return (
                            <div key={l.name}>
                                <button type="button" className="p-link" style={{ backgroundImage: `linear-gradient(to right, ${l.color1}, ${l.color2})` }} onClick={(e) => onLayoutColorChange(e, l.file, false)} title={l.name}>
                                    {props.layout === l.file && <i className="pi pi-check"></i>}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        );
    };

    const getSpecialLayoutColors = () => {
        return (
            <div className="layout-themes">
                {
                    layoutSpecialColors.map(l => {
                        return (
                            <div key={l.name}>
                                <button type="button" className="p-link" style={{ backgroundImage: `linear-gradient(to right, ${l.color1}, ${l.color2})` }} onClick={(e) => onLayoutColorChange(e, l.file, true)} title={l.name}>
                                    {props.layout === l.file && <i className="pi pi-check"></i>}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        );
    };

    const getThemes = () => {
        return (
            <div className="layout-themes">
                {
                    themeColors.map(t => {
                        return (
                            <div key={t.name}>
                                <button type="button" className="p-link" style={{ backgroundColor: t.color }} onClick={() => onThemeChange(t.file)} title={t.name}>
                                    {props.theme === t.file && <i className="pi pi-check"></i>}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        );
    };

    const configClassName = classNames('layout-config', { 'layout-config-active': props.configActive });
    const flatLayoutColors = getFlatLayoutColors();
    const specialLayoutColors = getSpecialLayoutColors();
    const themes = getThemes();

    return (
        <div id="layout-config" className={configClassName}>
            <button type="button" id="layout-config-button" className="layout-config-button p-link" onClick={onConfigButtonClick}>
                <i className="pi pi-cog"></i>
            </button>
            <div className="layout-config-content" onClick={props.onConfigClick}>
                <h5>Menu Mode</h5>
                <div className="p-grid">
                    <div className="p-col-6">
                        <div className="p-field-radiobutton">
                            <RadioButton name="menuMode" value="static" checked={props.menuMode === 'static'} inputId="mode1" onChange={props.onMenuModeChange}></RadioButton>
                            <label htmlFor="mode1">Static</label>
                        </div>
                    </div>
                    <div className="p-col-6">
                        <div className="p-field-radiobutton">
                            <RadioButton name="menuMode" value="overlay" checked={props.menuMode === 'overlay'} inputId="mode2" onChange={props.onMenuModeChange}></RadioButton>
                            <label htmlFor="mode2">Overlay</label>
                        </div>
                    </div>
                    <div className="p-col-6">
                        <div className="p-field-radiobutton">
                            <RadioButton name="menuMode" value="horizontal" checked={props.menuMode === 'horizontal'} inputId="mode3" onChange={props.onMenuModeChange}></RadioButton>
                            <label htmlFor="mode3">Horizontal</label>
                        </div>
                    </div>
                    <div className="p-col-6">
                        <div className="p-field-radiobutton">
                            <RadioButton name="menuMode" value="slim" checked={props.menuMode === 'slim'} inputId="mode4" onChange={props.onMenuModeChange}></RadioButton>
                            <label htmlFor="mode4">Slim</label>
                        </div>
                    </div>
                </div>

                <h5 className="p-mt-0">Menu Colors</h5>
                <div className="p-grid">
                    <div className="p-col-6">
                        <div className="p-field-radiobutton">
                            <RadioButton name="menuColor" value={true} checked={props.darkMenu} inputId="dark" onChange={props.onMenuColorChange} />
                            <label htmlFor="dark">Dark</label>
                        </div>
                    </div>
                    <div className="p-col-6">
                        <div className="p-field-radiobutton">
                            <RadioButton name="menuColor" value={false} checked={!props.darkMenu} inputId="light" onChange={props.onMenuColorChange} />
                            <label htmlFor="light">Light</label>
                        </div>
                    </div>
                </div>

                <h5 className="p-mt-0">User Profile</h5>
                <div className="p-grid">
                    <div className="p-col-6">
                        <div className="p-field-radiobutton">
                            <RadioButton name="profileMode" value="inline" checked={props.profileMode === 'inline'} disabled={props.menuMode === 'horizontal'} inputId="inline" onChange={props.onProfileModeChange} />
                            <label htmlFor="inline">Inline</label>
                        </div>
                    </div>
                    <div className="p-col-6">
                        <div className="p-field-radiobutton">
                            <RadioButton name="profileMode" value="top" checked={props.profileMode === 'top'} disabled={props.menuMode === 'horizontal'} inputId="top" onChange={props.onProfileModeChange} />
                            <label htmlFor="top">Overlay</label>
                        </div>
                    </div>
                </div>

                <h5 className="p-mt-0">Input Style</h5>
                <div className="p-formgroup-inline">
                    <div className="p-field-radiobutton">
                        <RadioButton inputId="input_outlined" name="inputstyle" value="outlined" checked={props.inputStyle === 'outlined'} onChange={(e) => props.onInputStyleChange(e.value)} />
                        <label htmlFor="input_outlined">Outlined</label>
                    </div>
                    <div className="p-field-radiobutton">
                        <RadioButton inputIid="input_filled" name="inputstyle" value="filled" checked={props.inputStyle === 'filled'} onChange={(e) => props.onInputStyleChange(e.value)} />
                        <label htmlFor="input_filled">Filled</label>
                    </div>
                </div>

                <h5 className="p-mt-0">Ripple Effect</h5>
                <InputSwitch checked={props.rippleActive} onChange={props.onRippleChange} />

                <h5>Flat Layout Colors</h5>
                {flatLayoutColors}

                <h5>Special Layout Colors</h5>
                {specialLayoutColors}

                <h5>Themes</h5>
                {themes}
            </div>
        </div>
    );
}

export default AppConfig;
