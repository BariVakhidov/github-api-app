import React, {FC} from "react";
import cn from "classnames";
import styles from "./MainContentWrapper.module.css";

interface Props {
    style?: string;
}

export const Title: FC<Props> = React.memo(({children, style}) => {
    return (
        <div className={cn(styles.title, style)}>
            {children}
        </div>
    )
})