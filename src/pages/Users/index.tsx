import React, { FC, useState, useEffect } from "react";
import { Input, Space } from "antd";
import { MainContentWrapper } from "components/mainContentWrapper";
import { Title } from "components/mainContentWrapper/Title";
import { instance } from "client/ApiClient";

const { Search } = Input;

export const Users: FC = React.memo(() => {
    const [users, setUsers] = useState(null);
    const [filter, setFilter] = useState("");

    const onSearch = (value: string) => setFilter(value);
    const searchUsers = async (filter: string) => {
      const response:any =  await instance.get("/search/users", {
          params: {
            q: filter,
          },
      }).then(response => response.data);
        setUsers(response)
    }
    useEffect(() => {
       if (filter) searchUsers(filter)
    }, [filter]);

  return (
    <MainContentWrapper>
      <Title>USERS</Title>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </MainContentWrapper>
  );
});
