import React, { FC } from "react";
import styles from "./Preloader.module.css"
import cn from 'classnames'
interface Props {
    modal?: boolean;
}

export const Preloader: FC<Props> = React.memo(({ modal }) => {
    return (
        <div className={cn(styles.container, modal && styles.modal)}>
            <div className={styles.ldsEllipsis}>
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
});