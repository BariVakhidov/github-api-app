import React, { FC } from 'react'
import { Card, Pagination } from "antd";
import { SearchUserInfo } from 'client/SearchClient/searchClient-types';

const { Meta } = Card;

interface Props {
    user: SearchUserInfo;
    onUserCLick: (username: string) => void;
}

export const UserComponent: FC<Props> = React.memo(({ user, onUserCLick }) => {
    return (
        <Card
            onClick={() => onUserCLick(user.login)}
            hoverable
            style={{ width: 240, marginBottom: "1rem" }}
            cover={<img alt="avatar" src={user.avatar_url} />}
        >
            <Meta title={user.login} description={user.repos_url} />
        </Card>
    )
})
