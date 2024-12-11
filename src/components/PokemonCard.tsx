function PokemonCard({name, imgSrc}) {

	return (
		<figure className="CardCaption">
			{imgSrc === undefined || imgSrc === "" || imgSrc === null ? (
				<p>???</p>
			) : (
				<img src={imgSrc} alt={name} />
			)}
			<figcaption>{name}</figcaption>
		</figure>
	);
}
export default PokemonCard;
