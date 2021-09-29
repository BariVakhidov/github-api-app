import React, { FC, useEffect, useState } from 'react'
import styles from "./Users.module.css"
import { Input } from "antd";
import { SearchUsersRequest } from 'client/SearchClient/searchClient-types';

const { Search } = Input;

interface Props {
    onSearch: (value: string) => void;
    filter: SearchUsersRequest;
}

export const SearchWrapper: FC<Props> = React.memo(({ onSearch, filter }) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        setValue(filter.q)
    }, [filter]);

    return <div className={styles.search}>
        <Search placeholder="input search text"  allowClear onBlur={() => onSearch(value)} onChange={(event) => setValue(event.currentTarget.value)} onSearch={onSearch} enterButton value={value} />
    </div>
})
