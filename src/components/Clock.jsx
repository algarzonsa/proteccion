import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const updateClock = () => {
            setTime(new Date());
        };

        const intervalId = setInterval(updateClock, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="clock">
                {time.toLocaleTimeString()}
            </div>
        </>
    )
}

export default Clock