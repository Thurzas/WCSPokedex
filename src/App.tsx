import { useState } from "react";
import PokedexClosed from "./assets/pokedexClosed.svg";
import PokedexOpen from "./assets/pokedexOpen.svg";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {

	return (
		<>        
			<section>
				<h1>Projet : Pokédex (Wild Code School édition)</h1>
        <div className="pokemonCard">
        <PokemonCard />
        </div>
				<img className="pokedex" src={PokedexOpen} alt="pokedex" />
			</section>
		</>
	);
}

export default App;
