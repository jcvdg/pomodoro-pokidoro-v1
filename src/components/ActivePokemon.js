import React, {useEffect, useState} from 'react';
import axios from 'axios';
import pokeball from '../media/pokeball.png';
import './ActivePokemon.css';


// 'DEFAULT', 'FOCUS_SESSION_START', 'FOCUS_SESSION_COMPLETE', 'BREAK_SESSION_START', 'BREAK_SESSION_COMPLETE'

const ActivePokemon = ({timerState, count, setPokemons}) => {
    const [pokemon, setPokemon] = useState('')
    const [pokemonLink, setPokemonLink] = useState('')

    const pokemonId = Math.round(Math.random()*151);

    const getPokemon = () => {
        // Request through axios
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then( pokemon => { // await async response setPokemon
                setPokemon(pokemon.data)
                setPokemonLink(pokemon.data['sprites']['other']['official-artwork']['front_default'])
            })
            .catch(err => console.log(err));

    }
    console.log(pokemonId, pokemon)

    useEffect( () => {
        if(count > 0) getPokemon();
        console.log(pokemon)
    },[count])

    const DisplayPokemon = () => {
        if(timerState === 'FOCUS_SESSION_START') {
            return (
                // <div>????</div>
                <div><img src={pokeball}/></div>
            )
        }else if(timerState === 'FOCUS_SESSION_COMPLETE' || timerState === 'BREAK_SESSION_START' || timerState === 'BREAK_SESSION_COMPLETE') {
            if( timerState === 'FOCUS_SESSION_COMPLETE' ) {
                // setPokemons({
                //     name:pokemon.name,
                //     id:pokemon.id,
                //     image:pokemonLink
                // })
            }
            return <div><img src={pokemonLink} /></div>
        }else {
            return <div><img src={pokeball}/></div>
        }
    }


    return (
        <div class="ActivePokemon">
            <DisplayPokemon />
        </div>
    )
}

export default ActivePokemon;