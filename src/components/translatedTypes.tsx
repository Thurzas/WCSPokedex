import { useEffect, useState } from "react";
import styles from "./pokemonCard.module.css";

type NameEntry = {
	name: string;
	language: {
		name: string;
	};
};
interface PokemonTypeProps {
	slot: number;
	name: string;
	url: string;
	lang: string;
}

type PokemonTypesResponse = {
	names: NameEntry[];
};
function TranslatedTypes({ url, slot, name, lang }: PokemonTypeProps) {
	const [types, setTypes] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const path = url.split("/");
	const id = path[path.length - 2];
	useEffect(() => {
		const fetchTypesData = async () => {
			try {
				const response = await fetch(`https://pokeapi.co/api/v2/type/${id}`);
				if (!response.ok)
					throw new Error("Erreur lors de la récupération des données !");
				const data: PokemonTypesResponse = await response.json();

				const localizedName = data.names.find(
					(entry) => entry.language.name === lang,
				)?.name;

				if (localizedName !== undefined) {
					setTypes(localizedName);
				}
			} catch (err) {
				setError((err as Error).message || "Une erreur inconnue est survenue.");
			} finally {
				setLoading(false);
			}
		};

		fetchTypesData();
	}, [id, lang]);

	if (loading) return <span>Loadding...</span>;
	if (error) return <span>Error : {error}</span>;

	return (
		<div>
			{types ? (
				<span className={styles[name]} key={slot}>
					{types}
				</span>
			) : (
				<p>unknown types</p>
			)}
		</div>
	);
}
export default TranslatedTypes;
