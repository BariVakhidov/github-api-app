import React, { FC } from "react";
import styles from "./Preloader.module.css"

export const Preloader: FC = React.memo(() => {
    return (
        <div className={styles.container}>
            <div className={styles.ldsEllipsis}>
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
});