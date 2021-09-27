import { Pagination, Modal, Button, Image } from 'antd';
import { SearchUsersRequest, SearchUsersResponse } from 'client/SearchClient/searchClient-types'
import { usersClient } from 'client/UsersClient/UsersClient';
import { User } from 'client/UsersClient/usersClient-types';
import { Preloader } from 'components/preloader'
import React, { FC, useState, useEffect } from 'react'
import { Nullable } from 'types';
import { UserComponent } from './User';
import styles from "./Users.module.css";

interface Props {
    isFetching: boolean;
    users: SearchUsersResponse | null;
    filter: SearchUsersRequest;
    onPageChange: (page: number, pageSize?: number) => void;
}

export const UsersWrapper: FC<Props> = React.memo(({ isFetching, users, filter, onPageChange }) => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState<Nullable<User>>(null);

    const onUserClick = (username: string) => setUsername(username);
    const onCLose = () => {
        setUser(null);
        setUsername("");
    };
    const getUser = async (username: string) => {
        const user = await usersClient.getUser(username);
        setUser(user);
    }

    useEffect(() => {
        if (username) getUser(username)
    }, [username])

    if (isFetching) {
        return <Preloader />
    }

    return (
        <>
            {
                users?.items && (
                    <>
                        <div className={styles.users}>
                            {users.items.map((user) => <UserComponent onUserCLick={onUserClick} user={user} key={user.id} />)}
                        </div>
                        {users.total_count > filter.per_page && <Pagination
                            pageSize={filter.per_page}
                            current={filter.page}
                            onChange={onPageChange}
                            total={users?.total_count / filter.per_page}
                        />}
                    </>
                )}
            {user && <Modal visible title={user.login} onCancel={onCLose} footer={null}>
                <Image
                    width={200}
                    src={user.avatar_url}
                />
                <p>{user.name}</p>
            </Modal>}
        </>
    )
})
