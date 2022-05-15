import './Controls.css';
import React, { useState,useEffect } from 'react';

const Controls = () => {
    const [timer, setTimer] = useState();
    const [focusSessionTime, setFocusSessionTime] = useState(2);
    const [breakSessionTime, setBreakSessionTime] = useState(5*60);
    const [runTimer, setRunTimer] = useState(false);


/*
Main Display: Focus Time / Break Time

Focus Time Buttons: active & updates main display IF focus session time=true;
Break Time Buttons: active & updates main display IF break session time=true;

*/


/////

    const startTimer = () => {
        setRunTimer(true)
    };

    const updateTime = () => {
        if(focusSessionTime > 0) {
            setFocusSessionTime(focusSessionTime => focusSessionTime - 1);
            console.log(`if greater, `, focusSessionTime)
        }
            console.log(`run focus session time - decrement`, focusSessionTime)
        if(focusSessionTime == 0) {
            setRunTimer(false);
            clearInterval(timer);
        }
    }

    useEffect( () => {
        let interval=0;

        if(runTimer) {
            interval = setInterval( updateTime, 1000);
            console.log('everryun')
            setTimer(interval)
        }

        return () => {
            console.log('useeffect return - ran')
                clearInterval(interval);
        }

    }, [runTimer, focusSessionTime])

    const pauseTimer = () => {
        clearInterval(timer);
        setRunTimer(!runTimer)
        console.log('pause completeTimer: ', runTimer)
    };

    const formatTime = (seconds) => {
        const s = seconds % 60;
        const m = Math.floor(seconds / 60);
        console.log('time: ', m, s, seconds)
        return (m < 10? '0':'')+ m + ':' + (s < 10? '0':'' )+ s
    }

    const selectTime = (e) => {
        setFocusSessionTime(e.target.value)
        e.target.className = 'active';
        console.log(e.target, e.target.className, e.target.value)
    }

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      {/* <button onClick={start}>start</button>
      <div>{secondsLeft} seconds left</div> */}

        <div>
            <h3>Focus Time</h3>
            <div>
            <div>{formatTime(focusSessionTime)}</div>
            </div>
            <div>
                <button 
                    className="" 
                    data-focus
                    onClick={selectTime} 
                    value='15'>
                        15
                </button>
                <button 
                    className="" 
                    onClick={e => setFocusSessionTime(e.target.value)} 
                    value='25'>
                        25
                </button>
                <button 
                    className="" 
                    onClick={e => setFocusSessionTime(e.target.value)} 
                    value='35'>
                        35
                </button>
                <button 
                    className="" 
                    onClick={e => setFocusSessionTime(e.target.value)} 
                    value='45'>
                        45
                </button>
            </div>
        </div>
        <div>
            <h3>Break Time</h3>
            <div>
                <div>{formatTime(breakSessionTime)}</div>
            </div>
            <div>
            <button 
                    className="active" 
                    onClick={e => setBreakSessionTime(e.target.value)} 
                    value='5'>
                        5
                </button>
                <button 
                    className="" 
                    onClick={e => setBreakSessionTime(e.target.value)} 
                    value="15">
                        15
                </button>
                <button 
                    className="" 
                    onClick={e => setBreakSessionTime(e.target.value)} 
                    value="20">
                        20
                </button>
              
            </div>
        </div>
        <div>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
        </div>
    </div>

  );
};

export default Controls;