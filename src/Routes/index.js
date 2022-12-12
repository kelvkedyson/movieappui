import React, { Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoutes';
import Home from "../Views/Home";

const loading = () => {
    return(
        <h2>Loading...</h2>
    );
};

const Routes = () => {

    const isAuth = true; //this will be used to control access to routes when a user is authenticated (Context API)
    return(
        <>
            <HashRouter>
                <Suspense fallback={loading()}>
                    <Switch>
                        <ProtectedRoute
                            path="/home"
                            name="home"
                            component={Home}
                            isAuth={isAuth}
                        />
                    </Switch>
                </Suspense>
            </HashRouter>
        </>
    );
};

export default Routes;