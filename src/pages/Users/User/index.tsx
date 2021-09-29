import React, { FC } from 'react'
import { Card } from "antd";
import { SearchUserInfo } from 'client/SearchClient/searchClient-types';
import { Nullable } from 'types';

const { Meta } = Card;

interface Props {
    user: SearchUserInfo;
    onUserCLick: (user: SearchUserInfo) => void;
    selectedUser: Nullable<SearchUserInfo>;
}

export const UserItem: FC<Props> = React.memo(({ user, onUserCLick, selectedUser }) => {
    const isSelected = selectedUser?.id === user.id;
    return (
        <Card
            onClick={() => onUserCLick(user)}
            hoverable
            bordered={isSelected}
            style={{ width: 240, marginBottom: "1rem" }}
            cover={<img alt="avatar" src={user.avatar_url} />}
        >
            <Meta title={user.login} />
        </Card>
    )
})
