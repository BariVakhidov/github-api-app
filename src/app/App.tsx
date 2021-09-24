import React, {useEffect, useState} from "react";
import {Layout} from "pages/Layout";
import {Button} from "antd";
import {MainContentWrapper} from "components/mainContentWrapper";

export const App = React.memo(() => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count === 5) {
            alert(5)
        }
    }, [count]);

    return (
        <Layout>
            <MainContentWrapper>
                <Button type={"primary"} onClick={() => setCount(prevState => ++prevState)}>
                    CLICK
                </Button>
                <div>
                    {count}
                </div>
            </MainContentWrapper>
        </Layout>
    );
})
