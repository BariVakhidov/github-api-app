import React, { FC, useState, useEffect } from "react";
import styles from "./Users.module.css";
import { Input } from "antd";
import { MainContentWrapper } from "components/mainContentWrapper";
import { Title } from "components/mainContentWrapper/Title";
import { searchUsersClient } from "client/SearchClient/SearchClient";
import { SearchUsersRequest, SearchUsersResponse } from "client/SearchClient/searchClient-types";
import { Card, Pagination } from "antd";

const { Meta } = Card;
const { Search } = Input;

export const Users: FC = React.memo(() => {
    const [users, setUsers] = useState<SearchUsersResponse | null>(null);
    const [isFetching, setFetching] = useState(false);
    const [filter, setFilter] = useState<SearchUsersRequest>({
      q: "",
      page: 1,
    });

    const onSearch = (value: string) => setFilter(prev => ({...prev, q: value}));
    const searchUsers = async (filter: SearchUsersRequest) => {
        setFetching(true);
      const response: any = await searchUsersClient.getUsers(filter);
        setUsers(response);
        setFetching(false);
    };
    useEffect(() => {
       if (filter.q) searchUsers(filter)
    }, [filter]);

  return (
    <MainContentWrapper>
      <Title>USERS</Title>
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
          {isFetching && <div><strong>LOADING</strong></div>}
      {users?.items && (
        <>
          <div className={styles.users}>
            {users.items.map((user) => (
              <Card
                key={user.id}
                hoverable
                style={{ width: 240, marginBottom: "1rem" }}
                cover={<img alt="avatar" src={user.avatar_url} />}
              >
                <Meta title={user.login} description={user.repos_url} />
              </Card>
            ))}
          </div>
          <Pagination
            current={filter.page}
            onChange={(page: number) =>
              setFilter((prev) => ({ ...prev, page }))
            }
            total={users?.total_count/30}
          />
        </>
      )}
    </MainContentWrapper>
  );
});
