'use client'
import { useState, useEffect } from 'react'

type Pokemon = {
    id: number;
    nombre: string;
    imagen: string;
};

export function PokemonAleatorios(){
    const [arrayPokemons, setArrayPokemons] = useState<Pokemon[]>([]);

    useEffect(() =>{
        async function obtenerPokemons(){
            const pokemonPar = [];
            for(let i = 0; i<9; i++){
                const numramdon = Math.floor(Math.random() * 1000 +1)
                const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${numramdon}`)
                const datos = await respuesta.json();
                pokemonPar.push(
                    {
                        id: i * 2 + 1,
                        nombre:datos.name,
                        imagen: datos.sprites.other['official-artwork'].front_default

                    },
                    {
                        id: i * 2 + 2,
                        nombre: datos.name,
                        imagen: datos.sprites.other['official-artwork'].front_default
                    }
                );
            }
            setArrayPokemons(pokemonPar.sort(() => Math.random() - 0.5));
        }
        obtenerPokemons();
    }, []);

    return arrayPokemons;
}




    
