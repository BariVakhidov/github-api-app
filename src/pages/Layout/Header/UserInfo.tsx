import { AuthUserInfo } from 'client/UsersClient/usersClient-types'
import React, { FC, memo } from 'react'
import styles from "./Header.module.css";
import { Avatar } from 'antd';
import { Nullable } from 'types'
import { NavLink } from 'react-router-dom';
import { Routes } from 'constants/routes';

interface Props {
    userInfo: Nullable<AuthUserInfo>;
}

export const UserInfo: FC<Props> = memo(({ userInfo }) => {

    if (!userInfo) {
        return null;
    }

    return (
        <>
            <Avatar src={userInfo.avatar_url} size={35} />
            <NavLink to={Routes.PROFILE} className={styles.login}>{userInfo.login}</NavLink>
        </>
    )
})
