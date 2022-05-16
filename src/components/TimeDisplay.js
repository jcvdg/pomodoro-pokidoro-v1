import React from 'react';

const TimeDisplay = ({timeInSeconds}) => {

    const formatTime = (seconds) => {
        const s = seconds % 60;
        const m = Math.floor(seconds / 60);
        console.log('time: ', m, s, seconds);
        return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    };

    return (
        <div className="TimeDisplay">{formatTime(timeInSeconds)}</div>
    )
}

export default TimeDisplay;