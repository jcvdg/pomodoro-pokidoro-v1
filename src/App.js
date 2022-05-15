import React, { useState,useEffect } from 'react';
import Controls from './components/Controls';
import ActivePokemon from './components/ActivePokemon';
// import CurrentProgress from './components/CurrentProgress';

const App = () => {

/*
Main Display: Focus Time / Break Time

Focus Time Buttons: active & updates main display IF focus session time=true;
Break Time Buttons: active & updates main display IF break session time=true;

*/


/////


    return (
        <div className="App">
            <h1>Pokidoro Timer</h1>

            <ActivePokemon />
            <Controls />
            {/* <CurrentProgress /> */}
        </div>
    )
};

export default App;