import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// import { About } from "./About";
import { Dashboard } from "./Dashboard";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { Product } from "./Product";
import { Spinner } from "react-bootstrap";

export function AppRoutes() {

    const aboutComponent = lazy(() => import(/* webpackChunkName: 'About' */ './About').then(module => ({
        default: module.About
    })));

    const LazyComponent = (Component: any) => (
        <Suspense fallback={<Spinner animation="border" />}>
            <Component />
        </Suspense>
    );

    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about">{LazyComponent(aboutComponent)}</Route>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/product/:name?" component={Product} />
            <Route component={NotFound} />
        </Switch>
    )
}