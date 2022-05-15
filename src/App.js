import React, { useState,useEffect } from 'react';
import Controls from './components/Controls';

const App = () => {

/*
Main Display: Focus Time / Break Time

Focus Time Buttons: active & updates main display IF focus session time=true;
Break Time Buttons: active & updates main display IF break session time=true;

*/


/////


    return (
        <div className="App">
            <Controls />
        </div>
    )
};

export default App;