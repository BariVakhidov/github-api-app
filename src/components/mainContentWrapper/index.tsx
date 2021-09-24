import React, {FC, useEffect} from "react";
import cn from "classnames";
import styles from "./MainContentWrapper.module.css";

interface Props {
    style: string;
    onKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const MainContentWrapper: FC<Partial<Props>> = React.memo(({children, style, onKeyPress}) => {
    return (
        <div className={cn(styles.wrapper, style)} onKeyDown={onKeyPress} tabIndex={0}>
            {children}
        </div>
    )
})
