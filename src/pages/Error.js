import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'primereact/button';

export const Error = () => {
    const history = useHistory();

    return (
        <div className="exception-body error">
            <div className="exception-text">
                <div className="exception-box">
                    <span>Error</span>
                </div>
                <span> Occured</span>
            </div>
            <div className="exception-panel">
                <div className="exception-image">
                    <img src="assets/layout/images/exception/icon-error.png" alt="avalon-layout" />
                </div>
                <div className="exception-panel-content">
                    <div className="information-text">
                        <h3>An error occured.</h3>
                        <p>Please contact system administrator.</p>
                    </div>
                    <Button label="Go To Dashboard" onClick={() => history.push('/')} />
                </div>
            </div>
        </div>
    );
}
