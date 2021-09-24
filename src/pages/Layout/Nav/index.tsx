import React, {FC, useState} from "react";
import styles from "./Nav.module.css";
import {RightCircleOutlined, UserOutlined} from "@ant-design/icons";
import cn from "classnames";
import {HddOutlined, TeamOutlined} from "@ant-design/icons";

export const Nav: FC = React.memo(() => {
    const [isNavVisible, setNavVisible] = useState(true);
    const angle = !isNavVisible ? 0 : -180
    const handleIconClick = () => setNavVisible(prevState => !prevState);
    return (
        <nav>
            <div onClick={handleIconClick} className={styles.icon}>
                <RightCircleOutlined rotate={angle}/>
            </div>
            <ul className={styles.container}>
                <li className={styles.item}>{isNavVisible ? "Profile" : <UserOutlined/>}</li>
                <li className={styles.item}>{isNavVisible ? "Repos" : <HddOutlined/>}</li>
                <li className={styles.item}>{isNavVisible ? "Users" : <TeamOutlined/>}</li>
            </ul>
        </nav>
    );
});
