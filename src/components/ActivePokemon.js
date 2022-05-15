import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import './ActivePokemon.css';

const ActivePokemon = (props) => {
    const [pokemon, setPokemon] = useState('')
    const [pokemonLink, setPokemonLink] = useState('')

    const pokemonId = Math.round(Math.random() * 151);

    const FOCUS_TIME_START = 1;
    const FOCUS_TIME_FINISHED = 2;

    const getPokemon = () => {
        // Request through axios
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(pokemon => { // Await async response setPokemon
                setPokemon(pokemon.data) // Somehow this isnt quick enough for setPokemonLink
                setPokemonLink(pokemon.data['sprites']['other']['official-artwork']['front_default']); // "front_default" is messing up the destructering
            })
            .catch(err => console.log(err)); // Something went wrong lets log it
    }

    useEffect(() => {
        getPokemon();
        console.log(pokemon)
    }, [props.timerState])

    const showPokemon = () => {
        return (
            <div>
                <h2>Active Pokemon</h2>
                <div>{pokemon.name}</div>
                <img id={pokemon.id} src={pokemonLink} alt={pokemon.name}/>
            </div>
        )
    }

    return (
        <div>
            {props.timerState === FOCUS_TIME_FINISHED ? showPokemon() : props.timerState === FOCUS_TIME_START ? "???" : "..."}
        </div>
    )

}

export default ActivePokemon;
