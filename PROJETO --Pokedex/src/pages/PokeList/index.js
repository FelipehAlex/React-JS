
import './poke-list.css';
import Card from '../../components/Card';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { getAllPokemons ,getPokemon } from '../../services/pokemons';


function PokeList() {
 
    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [previousUrl, setPreviousUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {

        async function fetchData() {
            let response = await getAllPokemons(initialUrl);
            console.log(response);
            setNextUrl(response.next);
            setPreviousUrl(response.previous);
            let pokemon = await loadingPokemon(response.results);
            console.log(pokemon);
            setLoading(false);
        }
        fetchData();

    }, []);

    const next = async () => {
        setLoading(true);
        let data = await getAllPokemons(nextUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPreviousUrl(data.previous);
        setLoading(false);
    }

    const prev = async () => {
        if (!previousUrl) return;
        setLoading(true);
        let data = await getAllPokemons(previousUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPreviousUrl(data.previous);
        setLoading(false);
    }

    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(
            data.map(async pokemon => {
                let pokemonRecord = await getPokemon(pokemon.url);
                return pokemonRecord;
            })
        );

        setPokemonData(_pokemonData);
        console.log(pokemonData);
    }

    return(
        <div className='host'>

            { pokemonData?.map(( pokemon, i ) => {
                return <Card key={i} pokemon={pokemon}/>
            })}

        </div>
    );
}

export default PokeList;