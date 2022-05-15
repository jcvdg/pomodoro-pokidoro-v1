import React, { useState } from 'react';

const Buttons = ({ options, selected, onSelectedChange }) => {
    const [clickedId, setClickedId] = useState(options[selected]);
    
    const renderOptions = options.map( (option,i) => {
            return (
                <button 
                    key={i}
                    className={ `${option===clickedId ? "active": ""}` }
                    onClick={() => {
                        setClickedId(option)
                        onSelectedChange(option)
                    }}
                >
                    {option}
                </button>
            )
        })
    

    return (
        <div>
            {renderOptions}
        </div>
    )
}

export default Buttons;
