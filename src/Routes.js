import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
const MainHome = lazy(() => import("./pages/MainHome"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));

const Routes = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={MainHome} />
                <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
        </>
    );
};

export default Routes;
