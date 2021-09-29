import React, { FC, useEffect, useMemo, useReducer } from "react";
import styles from "./Users.module.css";
import { MainContentWrapper } from "components/mainContentWrapper";
import { Title } from "components/mainContentWrapper/Title";
import { SearchUserInfo } from "client/SearchClient/searchClient-types";
import { UsersList } from "./UsersList";
import { SearchWrapper } from "./SearchWrapper";
import { Button } from "antd";
import { Nullable } from "types";
import { UserDetail } from "./UserDetail";
import { initialUsersState, UsersActions, usersReducer } from "logic/usersReducer";
import { UndoOutlined } from "@ant-design/icons";

export const Users: FC = React.memo(() => {

  const [state, dispatch] = useReducer(usersReducer, initialUsersState)
  const { filter, isFetching, selectedUser } = state;
  const title = useMemo(() => document.title, []);

  const onPageChange = (page: number, pageSize?: number) => dispatch({ type: UsersActions.SET_FILTER, payload: { ...filter, page, per_page: pageSize ? pageSize : filter.per_page } });
  const onSearch = (value: string) => dispatch({ type: UsersActions.SET_FILTER, payload: { ...filter, q: value } });
  const setFetching = (value: boolean) => dispatch({ type: UsersActions.SET_FETCHING, payload: value });
  const setSelectedUser = (user: Nullable<SearchUserInfo>) => dispatch({ type: UsersActions.SET_SELECTED_USER, payload: user });

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login;
    }
    return () => {
      document.title = title
    }
  }, [selectedUser])


  return (
    <MainContentWrapper>
      <Title>USERS</Title>
      <div className={styles.searchWrapper}>
        <SearchWrapper filter={filter} onSearch={onSearch} />
        <Button onClick={() => dispatch({ type: UsersActions.RESET_FILTER })}><UndoOutlined /></Button>
      </div>
      <UsersList selectedUser={selectedUser} isFetching={isFetching} setFetching={setFetching} setSelectedUser={setSelectedUser} onPageChange={onPageChange} filter={filter} />
      <UserDetail selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
    </MainContentWrapper>
  );
});
