import { useEffect, useState } from "react";
type FlavorTextEntry = {
	flavor_text: string;
	language: {
		name: string;
	};
};

type PokemonInfoResponse = {
	flavor_text_entries: FlavorTextEntry[];
};

interface PokemonInfoProps {
	id: number;
	lang: string;
}
function PokemonInfo(pokemon: PokemonInfoProps) {
	const [flavorText, setFlavorText] = useState<string | null>(null); // flavorText est littéralement le descriptif que fournie le pokédex, qui change en fonction des versions, je prend la premiere disponible en français.
	const [loading, setLoading] = useState<boolean>(true); // Indicateur de chargement, au cas où react prendrai du temps à charger les données de pokeAPI
	const [error, setError] = useState<string | null>(null); // Message d'erreur si ça tourne mal

	useEffect(() => {
		const fetchSpeciesData = async () => {
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id + 1}`,
				);
				if (!response.ok) {
					throw new Error("Erreur lors de la récupération des données !");
				}

				// Typage explicite de la réponse JSON
				const data: PokemonInfoResponse = await response.json();

				// Extraire le texte en français
				const text = data.flavor_text_entries.find(
					(entry) => entry.language.name === pokemon.lang,
				)?.flavor_text;

				// Nettoyage du texte si nécessaire
				const cleanText = text ? text.replace(/\n|\f/g, " ") : null;

				setFlavorText(cleanText);
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message); // Utilisation du message d'erreur
				} else {
					setError("Error: Info not found.");
				}
			} finally {
				setLoading(false);
			}
		};

		fetchSpeciesData();
	}, [pokemon.id, pokemon.lang]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error}</p>;

	return (
		<div>
			<p>{flavorText || "Description non disponible en français."}</p>
		</div>
	);
}

export default PokemonInfo;
