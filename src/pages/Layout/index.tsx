import React, { FC, useEffect, useState } from "react";
import { Header } from "pages/Layout/Header";
import { Nav } from "pages/Layout/Nav";
import { Footer } from "pages/Layout/Footer";
import styles from "./Layout.module.css";
import { instance } from "client";
import { usersClient } from "client/UsersClient/UsersClient";
import { Nullable } from "types";
import { AuthUserInfo } from "client/UsersClient/usersClient-types";

export const CurrentUserContext = React.createContext<Nullable<AuthUserInfo>>(null);

export const Layout: FC = React.memo(({ children }) => {
    const [userInfo, setUserInfo] = useState<Nullable<AuthUserInfo>>(null);
    const [isFetching, setIsFetching] = useState<boolean>(false);

    const getUserInfo = async () => {
        setIsFetching(true);
        const userInfoResponse = await usersClient.getAuthUserInfo();
        await setTimeout(() => setUserInfo(userInfoResponse), 500);
        setIsFetching(false);
    }
    useEffect(() => {
        getUserInfo();
    }, [])

    return (
        <CurrentUserContext.Provider value={userInfo}>
            <Nav />
            <div className={styles.container}>
                <Header userInfo={userInfo} isFetching={isFetching} />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    );
});
