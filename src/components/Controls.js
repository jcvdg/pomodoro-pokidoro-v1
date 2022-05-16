import './Controls.css';
import Buttons from './Buttons';
import React, { useState,useEffect } from 'react';
import TimeDisplay from './TimeDisplay';


const focusOptions = [15,25,35,45];
const breakOptions = [5,10,15,20];
const defaultFocusOption = 1;
const defaultBreakOption = 0;

function Controls({ setTimerState, count, setCount }) {
    const [timer, setTimer] = useState();
    const [focusSessionTime, setFocusSessionTime] = useState(focusOptions[1]*60);
    const [breakSessionTime, setBreakSessionTime] = useState(breakOptions[0]*60);
    // const [focusSessionTime, setFocusSessionTime] = useState(5);
    // const [breakSessionTime, setBreakSessionTime] = useState(2);
    const [runTimer, setRunTimer] = useState(false);
    const [focus, setFocus] = useState(true);
    const [runningTime, setRunningTime] = useState(focusSessionTime);

    // 'DEFAULT', 'FOCUS_SESSION_START', 'FOCUS_SESSION_COMPLETE', 'BREAK_SESSION_START', 'BREAK_SESSION_COMPLETE'
    const startTimer = () => {
        if (focus) {
            setRunningTime(focusSessionTime);
            setTimerState('FOCUS_SESSION_START');
            setCount(count+1);
        } else {
            setRunningTime(breakSessionTime);
            setTimerState('BREAK_SESSION_START');
        }
        setRunTimer(true);
        console.log('starttimer');
    };

    useEffect(() => {
        let interval = 0;

        if (runTimer) {
            interval = setInterval(updateTime, 1000);
            console.log('everryun');
            setTimer(interval);
        }

        return () => {
            console.log('useeffect return - ran');
            clearInterval(interval);
        };

    }, [runTimer, runningTime]);

    const updateTime = () => {
        if (runningTime > 0) {
            setRunningTime(runningTime => runningTime - 1);
            console.log(`if greater, `, runningTime);
        }
        console.log(`run focus session time - decrement`, runningTime);
        if (runningTime === 0) {
            if(focus)  {
                setTimerState('FOCUS_SESSION_COMPLETE');
                console.log('..................................', count, '..................................')
            }else {
                setTimerState('BREAK_SESSION_COMPLETE');

            }
            setRunTimer(false);
            setFocus(!focus);
            clearInterval(timer);
        }
    };

    const pauseTimer = () => {
        clearInterval(timer);
        setRunTimer(!runTimer);
        console.log('pause completeTimer: ', runTimer);
    };

    // const formatTime = (seconds) => {
    //     const s = seconds % 60;
    //     const m = Math.floor(seconds / 60);
    //     console.log('time: ', m, s, seconds);
    //     return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    // };


    console.log(runningTime, focusSessionTime, breakSessionTime);

    return (
        <div className="Controls">
            <div>

                {/* <div>{focus ? formatTime(focusSessionTime) : formatTime(breakSessionTime)}</div>
                <div>{formatTime(runningTime)}</div> */}
                <TimeDisplay timeInSeconds={runTimer ? runningTime : focus ? focusSessionTime : breakSessionTime}/>

                <div className="buttons">
                    <div className="sessionType">
                        <p>Focus Time</p>
                        <div className="timeSelector">
                            <Buttons
                                options={focusOptions}
                                selected={defaultFocusOption}
                                onSelectedChange={setFocusSessionTime} 
                            />
                        </div>
                    </div>
                    <div className="sessionType">
                        <p>Break Time</p>
                        <div className="timeSelector">
                            <Buttons
                                options={breakOptions}
                                selected={defaultBreakOption}
                                onSelectedChange={setBreakSessionTime} 
                            />
                        </div>
                    </div>
                    <div className='btn-timer'>
                        <button className='btn-control' onClick={startTimer}>Start</button>
                        <button className='btn-control' onClick={pauseTimer}>Pause</button>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Controls;