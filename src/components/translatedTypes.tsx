import styles from "./pokemonCard.module.css";
import {useState, useEffect} from 'react';

type NameEntry = {
	name: string;
	language: {
		name: string;
	};
};
type TypeEntry = {
	slot: number;
	type: {
		name: string;
		url: string;
	};
};
type PokemonTypesResponse = {
	names: NameEntry[];
};
function TranslatedTypes(typeEntries: TypeEntry[],url : string, lang : string)
{
    const [types, setTypes] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const path = url.split('/');
    const id = path[path.length - 1];
    useEffect(() => {
        const fetchTypesData = async () => {
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/type/${id}`,
				);
				if (!response.ok)
					throw new Error("Erreur lors de la récupération des données !");
				const data: PokemonTypesResponse = await response.json();

				const localizedName = data.names.find(
					(entry) => entry.language.name === lang,
				)?.name;

				if(localizedName !== undefined)
				{
					setTypes(localizedName);
				}
			} catch (err) {
				setError((err as Error).message || "Une erreur inconnue est survenue.");
			}
        };

        fetchTypesData();
    }, [id]);

    if (loading) return <p>Loadding...</p>;
	if (error) return <p>Error : {error}</p>;

    return (<div>
			{typeEntries ? (
				typeEntries.map((typeEntry : TypeEntry) => (
					<span
						className={styles[typeEntry.type.name]}
						key={typeEntry.slot}
					>
							{types}
					</span>
					))
				) : (
					<p>unknown types</p>
				)}
		</div>
	);
}
export default TranslatedTypes;