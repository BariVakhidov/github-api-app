import { Pagination } from 'antd';
import { searchUsersClient } from 'client/SearchClient/SearchClient';
import { SearchUserInfo, SearchUsersRequest, SearchUsersResponse } from 'client/SearchClient/searchClient-types'
import { Preloader } from 'components/preloader'
import React, { FC, useState, useEffect } from 'react'
import { Nullable } from 'types';
import { UserItem } from './User';
import styles from "./Users.module.css";

interface Props {
    filter: SearchUsersRequest;
    isFetching: boolean;
    onPageChange: (page: number, pageSize?: number) => void;
    selectedUser: Nullable<SearchUserInfo>;
    setSelectedUser: (user: Nullable<SearchUserInfo>) => void;
    setFetching: (value: boolean) => void;
}

export const UsersList: FC<Props> = React.memo(({ filter, onPageChange, isFetching, selectedUser, setSelectedUser, setFetching }) => {
    const [searchResult, setSearchResult] = useState<SearchUsersResponse | null>(null);
    const searchUsers = async (filter: SearchUsersRequest) => {
        setFetching(true);
        const response: any = await searchUsersClient.getUsers(filter);
        setSearchResult(response);
        setTimeout(() => setFetching(false), 500);
    };

    useEffect(() => {
        if (filter.q) searchUsers(filter)
    }, [filter.page, filter.per_page, filter.q]);

    useEffect(() => {
        return () => {
            setSearchResult(null)
        }
    }, [])

    if (isFetching) {
        return <Preloader />
    }

    return (
        <>
            {
                searchResult?.items && (
                    <>
                        <div className={styles.users}>
                            {searchResult.items.map((user) => <UserItem selectedUser={selectedUser} onUserCLick={setSelectedUser} user={user} key={user.id} />)}
                        </div>
                        {searchResult.total_count > filter.per_page && <Pagination
                            pageSize={filter.per_page}
                            current={filter.page}
                            onChange={onPageChange}
                            total={searchResult?.total_count / filter.per_page}
                        />}
                    </>
                )}
        </>
    )
})
