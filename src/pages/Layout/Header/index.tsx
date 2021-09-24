import React, {FC} from "react";
import styles from "./Header.module.css";
import {Button} from "antd";

export const Header: FC = React.memo(() => {
    return (
        <header>
            <div className={styles.user}>
                USER INFO
            </div>
            <Button>Logout</Button>
        </header>
    );
});
