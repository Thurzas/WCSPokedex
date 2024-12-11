import { useState } from "react";
import PokedexClosed from "./assets/pokedexClosed.svg";
import PokedexOpen from "./assets/pokedexOpen.svg";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
	const pokemonList = [
		{
			name: "bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
		},
		{
			name: "mew",
			imgSrc: null,
		},
	];
	const pokemon = pokemonList[1];
	return (
		<>
			<section>
				<h1>Projet : Pokédex (Wild Code School édition)</h1>
				<div className="pokeCard">
					<PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc} />
				</div>
				<img className="pokedex" src={PokedexOpen} alt="pokedex" />
			</section>
		</>
	);
}

export default App;
