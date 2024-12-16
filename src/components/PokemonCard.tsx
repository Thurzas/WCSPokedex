import { useEffect, useState } from "react";
import styles from "./pokemonCard.module.css";

interface PokemonCardProps {
	id: number;
	name: string;
	imgSrc?: string;
	lang: string;
}

type NameEntry = {
	name: string;
	language: {
		name: string;
	};
};

type PokemonSpeciesResponse = {
	names: NameEntry[];
};

type TypeEntry = {
	slot: number;
	type: {
		name: string;
		url: string;
	};
};

type PokemonTypeResponse = {
	types: TypeEntry[];
};

const PokemonCard: React.FC<PokemonCardProps> = ({
	id,
	name,
	imgSrc,
	lang,
}) => {
	const [nameCaption, setNameCaption] = useState<string | null>(null);
	const [types, setTypes] = useState<TypeEntry[] | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// Fetch species info
	useEffect(() => {
		const fetchSpeciesData = async () => {
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon-species/${id + 1}`,
				);
				if (!response.ok)
					throw new Error("Erreur lors de la récupération des données !");
				const data: PokemonSpeciesResponse = await response.json();

				// Chercher le nom dans la langue spécifiée
				const localizedName = data.names.find(
					(entry) => entry.language.name === lang,
				)?.name;
				setNameCaption(localizedName || name);
			} catch (err) {
				setError((err as Error).message || "Une erreur inconnue est survenue.");
			}
		};

		fetchSpeciesData();
	}, [id, lang, name]);

	// Fetch types info
	useEffect(() => {
		const fetchTypesData = async () => {
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${id + 1}`,
				);
				if (!response.ok)
					throw new Error("Erreur lors de la récupération des données !");
				const data: PokemonTypeResponse = await response.json();
				setTypes(data.types || null);
			} catch (err) {
				setError((err as Error).message || "Une erreur inconnue est survenue.");
			} finally {
				setLoading(false);
			}
		};

		fetchTypesData();
	}, [id]);

	if (loading) return <p>Loadding...</p>;
	if (error) return <p>Error : {error}</p>;

	return (
		<figure className="cardCaption">
			{imgSrc ? <img src={imgSrc} alt={nameCaption || name} /> : <p>???</p>}
			<figcaption>
				N#{id + 1} {nameCaption || name}
				<div>
					{types ? (
						types.map((typeEntry) => (
							<span
								className={styles[typeEntry.type.name]}
								key={typeEntry.slot}
							>
								{typeEntry.type.name}
							</span>
						))
					) : (
						<p>unknown types</p>
					)}
				</div>
			</figcaption>
		</figure>
	);
};

export default PokemonCard;
