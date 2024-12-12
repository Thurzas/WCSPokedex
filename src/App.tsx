import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
	const [pokeIndex, setPokeIndex] = useState(0);
	const pokemonList = [
		{
			name: "bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
		},
		{
			name: "charmander",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
		},
		{
			name: "squirtle",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
		},
		{
			name: "pikachu",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
		},
		{
			name: "mew",
		},
	];

	const pokemon = pokemonList[pokeIndex];
	console.log(pokeIndex);
	return (
		<>
			<section>
				<h1>Projet : Pokédex (Wild Code School édition)</h1>
				<section id="pokedexContainer">
					<div id="topDecoration" />
					<section id="subComponent">
						<section id="mainComponent">
							<section className="screen">
								<div className="pokeCard">
									<PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc} />
								</div>
							</section>
							<section id="buttonContainer">
								<button
									type="button"
									onClick={() =>
										setPokeIndex(
											Math.floor(Math.random() * (pokemonList.length - 1)),
										)
									}
									className="rounded"
								/>
								<button
									type="button"
									onClick={() =>
										setPokeIndex(pokeIndex > 0 ? pokeIndex - 1 : pokeIndex)
									}
									className="back"
								>
									prev
								</button>
								<button
									type="button"
									onClick={() =>
										setPokeIndex(
											pokeIndex < pokemonList.length - 1
												? pokeIndex + 1
												: pokeIndex,
										)
									}
									className="next"
								>
									next
								</button>
								<button type="button" className="cross" />
							</section>
						</section>
						<section id="junction">
							<div className="bracket" />
							<div className="bracket" />
						</section>
						<section id="rightComponent">
							<div className="topRightDecoration" />
							<section className="rightWrapper">
								<section className="screenInfo">
									<p>TODO: Pokemon Infos here</p>
								</section>
								<section className="buttonWrapperRight">
									<button type="button" className="buttonRight" />
									<button type="button" className="buttonRight" />
									<button type="button" className="buttonRight" />
									<button type="button" className="buttonRight" />
									<button type="button" className="buttonRight" />
									<button type="button" className="buttonRight" />
									<button type="button" className="buttonRight" />
									<button type="button" className="buttonRight" />
									<button type="button" className="buttonRight" />
									<button type="button" className="buttonRight" />
									<button type="button" className="buttonRight" />
									<button type="button" className="buttonRight" />
								</section>
							</section>
						</section>
					</section>
				</section>
			</section>
		</>
	);
}

export default App;
