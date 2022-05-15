import './Controls.css';
import Buttons from './Buttons';
import React, { useState,useEffect } from 'react';


const focusOptions = [15,25,35,45];
const breakOptions = [5,10,15,20];

const Controls = () => {
    const [timer, setTimer] = useState();
    const [focusSessionTime, setFocusSessionTime] = useState(2);
    const [breakSessionTime, setBreakSessionTime] = useState(5*60);
    const [runTimer, setRunTimer] = useState(false);
    const [focus, setFocus] = useState(true);
    const [runningTime, setRunningTime] = useState(focusSessionTime)
    const [selectedFocusOption, setSelectedFocusOption] = useState(1);
    const [selectedBreakOption, setSelectedBreakOption] = useState(0);

/*
Main Display: Focus Time / Break Time

Focus Time Buttons: active & updates main display IF focus session time=true;
Break Time Buttons: active & updates main display IF break session time=true;

*/


/////

    const startTimer = () => {
        focus ? setRunningTime(focusSessionTime) : setRunningTime(breakSessionTime)
        setRunTimer(true)
        console.log('starttimer')
    };

    const updateTime = () => {
        if(runningTime > 0) {
            setRunningTime(runningTime => runningTime - 1);
            console.log(`if greater, `, runningTime)
        }
            console.log(`run focus session time - decrement`, runningTime)
        if(runningTime == 0) {
            setRunTimer(false);
            setFocus(!focus);
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

    }, [runTimer, runningTime])

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

    // const selectTime = (e) => {
    //     setFocusSessionTime(e.target.value)
    //     e.target.className = 'active';
    //     console.log(e.target, e.target.className, e.target.value)
    // }


console.log(runningTime, focusSessionTime, breakSessionTime);

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>

        <div>
        
            <div>{focus? formatTime(focusSessionTime) : formatTime(breakSessionTime)}</div>
            <div>{formatTime(runningTime)}</div>

            <h4>Focus Time</h4>
            <Buttons 
                options={focusOptions} 
                selected={selectedFocusOption} 
                onSelectedChange={setFocusSessionTime}
            />
            <h4>Break Time</h4>
            <Buttons 
                options={breakOptions} 
                selected={selectedBreakOption} 
                onSelectedChange={setBreakSessionTime}
            />

        </div>
           
        <div>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
        </div>
    </div>

  );
};

export default Controls;