import React, { useEffect } from 'react';
import { Route, useLocation, withRouter } from 'react-router-dom';
import App from './App';
import { Signup } from './pages/Signup/Signup';
import Home  from './importedComponents/Home';
import { Login }  from './pages/Login/Login';


import { Error } from './pages/Error';
import { NotFound } from './pages/NotFound';
import { Access } from './pages/Access';
import { Wizard } from './pages/Wizard';

const AppWrapper = () => {

    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    switch (location.pathname) {
        case '/login':
            return <Route path="/login" component={Login} />
        case '/home':
                return <Route path="/home" component={Home} />    
        case '/signup':
                return <Route path="/signup" component={Signup} />         
        case '/error':
            return <Route path="/error" component={Error} />
        case '/notfound':
            return <Route path="/notfound" component={NotFound} />
        case '/access':
            return <Route path="/access" component={Access} />
        case '/wizard':
            return <Route path="/wizard" component={Wizard} />
        default:
            return <App />;
    }
}

export default withRouter(AppWrapper);
