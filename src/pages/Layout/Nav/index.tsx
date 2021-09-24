import React, {FC, useState} from "react";
import styles from "./Nav.module.css";
import {RightCircleOutlined, UserOutlined} from "@ant-design/icons";
import cn from "classnames";
import {HddOutlined, TeamOutlined} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Routes } from "constants/routes";

export const Nav: FC = React.memo(() => {
    const [isNavVisible, setNavVisible] = useState(true);
    const angle = !isNavVisible ? 0 : -180
    const handleIconClick = () => setNavVisible(prevState => !prevState);
    return (
      <nav>
        <div onClick={handleIconClick} className={styles.icon}>
          <RightCircleOutlined rotate={angle} />
        </div>
        <ul className={styles.container}>
          <li className={styles.item}>
            <NavLink to={Routes.PROFILE}>
              {isNavVisible ? "Profile" : <UserOutlined />}
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to={Routes.USERS} activeClassName={styles.active}>
              {isNavVisible ? "Repos" : <HddOutlined />}
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to={Routes.USERS}>
              {isNavVisible ? "Users" : <TeamOutlined />}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
});
