import React, { FC, useEffect, useState } from 'react'
import styles from './Users.module.css'
import { Nullable } from 'types'
import { User } from 'client/UsersClient/usersClient-types';
import { Drawer, Image } from 'antd';
import { usersClient } from 'client/UsersClient/UsersClient';
import { SearchUserInfo } from 'client/SearchClient/searchClient-types';
import { Timer } from './Timer';
import { Preloader } from 'components/preloader';

interface Props {
    selectedUser: Nullable<SearchUserInfo>;
    setSelectedUser: (user: Nullable<SearchUserInfo>) => void;
}

export const UserDetail: FC<Props> = React.memo(({ selectedUser, setSelectedUser }) => {

    const [user, setUser] = useState<Nullable<User>>(null);
    const [isFetching, setFetching] = useState(false);

    const closeModal = () => setSelectedUser(null);
    const getUser = async (username: string) => {
        setFetching(true);
        const user = await usersClient.getUser(username);
        setUser(user);
        setTimeout(() => setFetching(false), 500)
    }

    useEffect(() => {
        if (selectedUser) {
            getUser(selectedUser.login)
        }
        return () => {
            setUser(null);
        }
    }, [selectedUser]);

    if (isFetching) {
        return <Preloader modal />
    }

    return (
        <>
            {user && <Drawer visible title={<div className={styles.detailTitle}>
                <span><a href={user.html_url}>{user.login}</a></span>
                <Timer timerKey={user.id} defaultValue={10} callback={closeModal} />
            </div>} onClose={closeModal} placement="right">
                <Image
                    width={200}
                    src={user.avatar_url}
                />
                <p><strong>{user.name}</strong></p>
                <div>
                    {user.company && <p>Company: <strong>{user.company}</strong></p>}
                    {user.location && <p>Location: <strong>{user.location}</strong></p>}
                    {user.bio && <p>Bio: <strong>{user.bio}</strong></p>}
                    {user.email && <p>E-mail: <strong>{user.email}</strong></p>}
                </div>
            </Drawer>}
        </>
    )
})
