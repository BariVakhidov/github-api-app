import React, { FC, useEffect, memo, useState } from 'react'
import { Progress } from 'antd';

interface Props {
    defaultValue: number;
    callback: () => void;
    timerKey: string | number;
}

export const Timer: FC<Props> = memo(({ defaultValue, callback, timerKey }) => {
    const [timer, setTimer] = useState(defaultValue);

    useEffect(() => {
        const intervalId = setInterval(() => setTimer(prev => prev - 1), 1000)
        return () => {
            clearInterval(intervalId);
            setTimer(defaultValue);
        }
    }, [timerKey, defaultValue]);

    useEffect(() => {
        if (timer === 0) {
            callback();
        }
    }, [timer])

    return <Progress width={30} type="circle" percent={timer * 10} format={(percent) => percent! / 10} />


})
