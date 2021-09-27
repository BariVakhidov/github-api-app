import React, { useEffect, useState } from "react";
import { Layout } from "pages/Layout";
import { Button } from "antd";
import { MainContentWrapper } from "components/mainContentWrapper";
import { instance } from "client";
import { Route, Switch } from "react-router";
import { routesArr } from "constants/routes";

export const App = React.memo(() => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        instance.get("/users");
    }, []);


    return (
        <Layout>
            <Switch>
                {routesArr.map(i => <Route exact path={i.path} key={i.path} component={i.component} />)}
            </Switch>
        </Layout>
    );
})
