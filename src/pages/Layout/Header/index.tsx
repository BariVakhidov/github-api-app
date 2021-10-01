import React, { FC } from "react";
import styles from "./Header.module.css";
import { Spin, Avatar } from 'antd';
import { Nullable } from "types";
import { AuthUserInfo } from "client/UsersClient/usersClient-types";
import { UserInfo } from "./UserInfo";

interface Props {
    userInfo: Nullable<AuthUserInfo>;
    isFetching: boolean;
}

export const Header: FC<Props> = React.memo(({ isFetching, userInfo }) => {
    return (
        <header>
            <div className={styles.user}>
                {isFetching ? <Spin /> : <UserInfo userInfo={userInfo} />}
            </div>
        </header>
    );
});
