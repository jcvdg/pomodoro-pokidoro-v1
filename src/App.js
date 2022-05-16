import React, { useState,useEffect } from 'react';
import Controls from './components/Controls';
import ActivePokemon from './components/ActivePokemon';
import CurrentProgress from './components/CurrentProgress';

const App = () => {
// 'DEFAULT', 'FOCUS_SESSION_START', 'FOCUS_SESSION_COMPLETE', 'BREAK_SESSION_START', 'BREAK_SESSION_COMPLETE'
const [timerState, setTimerState] = useState('DEFAULT');
const [count, setCount] = useState(0);
const [pokemons, setPokemons] = useState([]);
/*
Main Display: Focus Time / Break Time

Focus Time Buttons: active & updates main display IF focus session time=true;
Break Time Buttons: active & updates main display IF break session time=true;

*/


/////
console.log('setTimerState: ', timerState)

    return (
        <div className="App">
            <div className="container">
                <h1>Pokidoro Timer</h1>
                
                <ActivePokemon 
                    timerState={timerState}
                    count={count}
                    pokemons={setPokemons}
                />
                {/* <DisplayTime /> */}
                <Controls 
                    setTimerState={setTimerState}    
                    count={count}
                    setCount={setCount}
                />
                {/* <CurrentProgress 
                    pokemons={pokemons}
                /> */}
            </div>
        </div>
    )
};

export default App;