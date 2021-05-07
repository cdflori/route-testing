import React from 'react';
import "./App.scss";

// import './style.css';

const AppFooter = () => {

    return (
        <div className="layout-footer color-footer">
            <span className="footer-text-right">
                <p style={{color: "black"}}>Copyright <span>&#169;</span> 2018-2021 HyperFIELD | All Rights Reserved</p>
            </span>
            {/* <span className="footer-text-right">
                <button className="p-link"><i className="pi pi-facebook"></i></button>
                <button className="p-link"><i className="pi pi-twitter"></i></button>
                <button className="p-link"><i className="pi pi-github"></i></button>
            </span> */}
        </div>
    );
}

export default AppFooter;
