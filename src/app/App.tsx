import React, { FC } from "react";
import { Layout } from "pages/Layout";
import { Route, Switch } from "react-router";
import { routesArr } from "constants/routes";

export const App: FC = React.memo(() => {
    return (
        <Layout>
            <Switch>
                {routesArr.map(i => <Route exact path={i.path} key={i.path} component={i.component} />)}
            </Switch>
        </Layout>
    );
})
