// import './Buttons.css';
import React, { useState } from 'react';

const Buttons = ({ options, selected, onSelectedChange }) => {
    const [clickedId, setClickedId] = useState(options[selected]);
    
    const renderOptions = options.map( (option) => {
            return (
                <button 
                    key={option}
                    className={ `${option===clickedId ? "active": ""}` }
                    onClick={() => {
                        setClickedId(option)
                        onSelectedChange(option*60)
                    }}
                >
                    {option}
                </button>
            )
        })
    

    return (
        <>
            {renderOptions}
        </>
    )
}

export default Buttons;