import React, { FC, useState } from "react";
import styles from "./Nav.module.css";
import { RightCircleOutlined, UserOutlined } from "@ant-design/icons";
import cn from "classnames";
import { HddOutlined, TeamOutlined } from "@ant-design/icons";
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
      <div className={styles.container}>
        <NavLink to={Routes.PROFILE} className={styles.item} activeClassName={styles.active}>
          {isNavVisible ? <><UserOutlined /> GitHub profile</> : <UserOutlined />}
        </NavLink>
        <NavLink to={Routes.USERS} className={styles.item} activeClassName={styles.active}>
          {isNavVisible ? <><HddOutlined /> Users search</> : <HddOutlined />}
        </NavLink>
      </div>
    </nav>
  );
});
