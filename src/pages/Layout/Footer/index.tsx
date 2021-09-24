import React, {FC} from "react";
import styles from "./Footer.module.css";

export const Footer: FC = React.memo(() => {
    return (
        <footer>
            <div className={styles.container}>
                2021 <br/>
                All rights reserved
            </div>
        </footer>
    );
});
