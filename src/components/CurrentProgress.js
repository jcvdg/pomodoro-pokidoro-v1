import React from 'react';

const CurrentProgress = ({pokemons}) => {


    return (
        <div>
            <h2>CurrentProgress</h2>
            <div>{pokemons? pokemons: "start catching them!"}</div>
        </div>
    )
}

export default CurrentProgress;