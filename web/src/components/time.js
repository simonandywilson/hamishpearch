import React, { useState, useEffect } from "react";

const Time = (props) => {
    const [time, setTime] = useState("00:00:00");

    useEffect(() => {
        const timer = setInterval(() => tick(), 1000);
        return () => clearInterval(timer);
    });

    function tick() {
        const time = new Date();
        setTime(time.toLocaleTimeString());
    }
    return <time className={props.class}>{time}</time>;
};

export default Time;
