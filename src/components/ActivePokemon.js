import React, {useEffect, useState} from 'react';
import pokeapi from '../apis/pokeapi';
import axios from 'axios';
// import './ActivePokemon.css';

const ActivePokemon = () => {
    const [pokemon, setPokemon] = useState('')
    const [pokemonLink, setPokemonLink] = useState('')

    const pokemonId = Math.round(Math.random()*151);

    const getPokemon = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            console.log(response)
            setPokemon(response.data);
            setPokemonLink(pokemon['sprites']['other']['official-artwork']['front_default']);
            console.log(pokemonLink)
        } catch (err) {
            console.log(err)
        }
    }
    console.log(pokemonId, pokemon)
    // console.log(pokemon['sprites']['other']['official-artwork']['front_default'])
    // getPokemon();
    // let x = getPokemon();
    useEffect( () => {
        getPokemon();
        console.log(pokemon)
    },[])

    return (
        <div>
            <h2>Active Pokemon</h2>
            <div>{pokemon.name}</div>
            <img src={pokemonLink} />
        </div>
    )
}

export default ActivePokemon;