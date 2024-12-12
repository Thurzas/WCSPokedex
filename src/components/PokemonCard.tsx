interface PokemonCard {
	id: number;
	name: string;
	imgSrc?: string;
}

function PokemonCard(pokemon: PokemonCard) {
	return (
		<figure className="cardCaption">
			{pokemon.imgSrc === undefined ||
			pokemon.imgSrc === "" ||
			pokemon.imgSrc === null ? (
				<p>???</p>
			) : (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			)}
			<figcaption>N#{pokemon.id+1} {pokemon.name}</figcaption>
		</figure>
	);
}
export default PokemonCard;
