import React, {FC, Profiler} from "react";
import {BrowserRouter} from "react-router-dom";
import {App} from "app/App";

export const AppWrapper: FC = React.memo(() => {
    return (
        <BrowserRouter>
            <Profiler id={"App"} onRender={(id, phase, actualTime) => {
                console.log(`${id}, phase: ${phase}, actualDuration: ${actualTime}`);
            }}>
                <App/>
            </Profiler>
        </BrowserRouter>
    );
});
