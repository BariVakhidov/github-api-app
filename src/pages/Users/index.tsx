import React, { FC, useState, useEffect } from "react";
import styles from "./Users.module.css";
import { Input } from "antd";
import { MainContentWrapper } from "components/mainContentWrapper";
import { Title } from "components/mainContentWrapper/Title";
import { searchUsersClient } from "client/SearchClient/SearchClient";
import { SearchUsersRequest, SearchUsersResponse } from "client/SearchClient/searchClient-types";
import { UsersWrapper } from "./UsersWrapper";

const { Search } = Input;

export const Users: FC = React.memo(() => {
  const [users, setUsers] = useState<SearchUsersResponse | null>(null);
  const [isFetching, setFetching] = useState(false);
  const [filter, setFilter] = useState<SearchUsersRequest>({
    q: "",
    page: 1,
    per_page: 30,
  });

  const onPageChange = (page: number, pageSize?: number) => setFilter(prev => ({ ...prev, page, per_page: pageSize ? pageSize : prev.per_page }));
  const onSearch = (value: string) => setFilter(prev => ({ ...prev, q: value }));
  const searchUsers = async (filter: SearchUsersRequest) => {
    setFetching(true);
    const response: any = await searchUsersClient.getUsers(filter);
    setUsers(response);
    setTimeout(() => setFetching(false), 500);
  };

  useEffect(() => {
    if (filter.q) searchUsers(filter)
  }, [filter]);

  return (
    <MainContentWrapper>
      <Title>USERS</Title>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <UsersWrapper onPageChange={onPageChange} filter={filter} users={users} isFetching={isFetching} />
    </MainContentWrapper>
  );
});
