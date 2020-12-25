import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';

///////////////////////////////////////////////////////////////////////////
// Changing all normal path
const RouteWithSubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} routes={route.routes} />}
        />
    )
}

///////////////////////////////////////////////////////////////////////////
// Changing sub path and if path is not true returns Not Found page
export const RenderRoutes = ({ routes }) => {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} {...route} />
            })}
            <Route component={() => <NotFound />} />
        </Switch>
    )
}