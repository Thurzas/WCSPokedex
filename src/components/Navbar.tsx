import LanguageSelect from "./language.tsx";
import styles from "./navbar.module.css";
interface Pokemon {
	id: number;
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	setLanguage: React.Dispatch<React.SetStateAction<string>>;
	setPokeIndex: (index: number) => void;
	setPokemonTabIndex: React.Dispatch<React.SetStateAction<number>>;
	ItemPerPage: number;
	pokemonList: Pokemon[];
	currentTabs: Pokemon[];
}
//ne paniquez pas ! si il y a des trucs en plus, je me suis un peu éloigné de la consigne pour faire un truc plus dans mes goûts.
// Par exemple, comme j'ai fait litéralement un pokédex dans ce projet, j'ai fait une pagination pour pouvoir faire des onglets. car sinon c'est illisible.
// Aussi, comme j'ai voulu aller plus loin dans le projet et que je suis parti d'une branche assez éloigné de l'éxercice, du coup
// il y a une vilaine requête pour une ressource distante assez horrible à lire dans PokemonCard (j'ai fetch des infos de pokeAPI).
// la ressource en question permet de récupérer les noms et les descriptions des pokemons en fonction de la langue choisis, d'où la liste langue dans la navbar.
function NavBar({
	setLanguage,
	setPokeIndex,
	setPokemonTabIndex,
	ItemPerPage,
	pokemonList,
	currentTabs,
}: NavBarProps) {
	return (
		<nav className={styles.nav}>
			<section>
				<button
					type="button"
					className="yellowSpace"
					onClick={() => {
						setPokeIndex(0);
						setPokemonTabIndex((prev) => (prev > 0 ? prev - 1 : prev));
					}}
				>
					LEFT
				</button>
				<section className="tabs">
					{currentTabs.map((pokemon) => (
						<button
							key={pokemon.id}
							type="button"
							onClick={() => setPokeIndex(pokemon.id % ItemPerPage)}
							className="buttonRight"
						>
							{pokemon.name}
						</button>
					))}
				</section>
				<button
					type="button"
					className="yellowSpace"
					onClick={() => {
						setPokeIndex(0);
						setPokemonTabIndex((prev) =>
							(prev + 1) * ItemPerPage < pokemonList.length ? prev + 1 : prev,
						);
					}}
				>
					RIGHT
				</button>
			</section>
			<section>
				<LanguageSelect setLanguage={setLanguage} />
			</section>
		</nav>
	);
}

export default NavBar;
