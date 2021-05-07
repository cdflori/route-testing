import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'primereact/button';

export const Access = () => {
    const history = useHistory();

    return (
        <div className="exception-body access">
            <div className="exception-text">
                <div className="exception-box">
                    <span>Access</span>
                </div>
                <span> Denied</span>
            </div>
            <div className="exception-panel">
                <div className="exception-image">
                    <img src="assets/layout/images/exception/icon-error.png" alt="avalon-layout" />
                </div>
                <div className="exception-panel-content">
                    <div className="information-text">
                        <h3>Access denied to this resource.</h3>
                        <p>You don't have the necessary permission.</p>
                    </div>
                    <Button label="Go To Dashboard" onClick={() => history.push('/')} />
			    </div>
            </div>
        </div>
    );
}
