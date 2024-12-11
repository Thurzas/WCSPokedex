function PokemonCard() {
	const pokemonList = [
		{
			name: "bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
		},
		{
			name: "mew",
		},
	];
	const pokemon = pokemonList[1];

	return (
		<figure className="CardCaption">
			{pokemon.imgSrc === undefined || pokemon.imgSrc === "" ? (
				<p>???</p>
			) : (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			)}
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}
export default PokemonCard;
