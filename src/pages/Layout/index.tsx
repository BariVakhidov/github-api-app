import React, {FC} from "react";
import {Header} from "pages/Layout/Header";
import {Nav} from "pages/Layout/Nav";
import {Footer} from "pages/Layout/Footer";
import styles from "./Layout.module.css";

export const Layout: FC = React.memo(({children}) => {
    return (
        <>
            <Nav/>
            <div className={styles.container}>
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    );
});
