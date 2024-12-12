import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";


function App() {
	const [pokemonTabIndex, setPokemonTabIndex] = useState(0); // Page actuelle
	const [pokeIndex, setPokeIndex] = useState(0); // Index dans la page actuelle
	const ItemPerPage = 10;
	const pokemonList = [
		{
			id: 0,
			name: "bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
		},
		{
			id: 1,
			name: "ivysaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
		},
		{
			id: 2,
			name: "venusaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
		},
		{
			id: 3,
			name: "charmander",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
		},
		{
			id: 4,
			name: "charmeleon",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
		},
		{
			id: 5,
			name: "charizard",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
		},
		{
			id: 6,
			name: "squirtle",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
		},
		{
			id: 7,
			name: "wartortle",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
		},
		{
			id: 8,
			name: "blastoise",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
		},
		{
			id: 9,
			name: "caterpie",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
		},
		{
			id: 10,
			name: "metapod",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
		},
		{
			id: 11,
			name: "butterfree",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
		},
		{
			id: 12,
			name: "weedle",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
		},
		{
			id: 13,
			name: "kakuna",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
		},
		{
			id: 14,
			name: "beedrill",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
		},
		{
			id: 15,
			name: "pidgey",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
		},
		{
			id: 16,
			name: "pidgeotto",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
		},
		{
			id: 17,
			name: "pidgeot",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
		},
		{
			id: 18,
			name: "rattata",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
		},
		{
			id: 19,
			name: "raticate",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
		},
		{
			id: 20,
			name: "spearow",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
		},
		{
			id: 21,
			name: "fearow",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
		},
		{
			id: 22,
			name: "ekans",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
		},
		{
			id: 23,
			name: "arbok",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
		},
		{
			id: 24,
			name: "pikachu",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
		},
		{
			id: 25,
			name: "raichu",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
		},
		{
			id: 26,
			name: "sandshrew",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
		},
		{
			id: 27,
			name: "sandslash",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
		},
		{
			id: 28,
			name: "nidoran♀",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
		},
		{
			id: 29,
			name: "nidorina",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
		},
		{
			id: 30,
			name: "nidoqueen",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
		},
		{
			id: 31,
			name: "nidoran♂",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
		},
		{
			id: 32,
			name: "nidorino",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
		},
		{
			id: 33,
			name: "nidoking",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
		},
		{
			id: 34,
			name: "clefairy",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
		},
		{
			id: 35,
			name: "clefable",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
		},
		{
			id: 36,
			name: "vulpix",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
		},
		{
			id: 37,
			name: "ninetales",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
		},
		{
			id: 38,
			name: "jigglypuff",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
		},
		{
			id: 39,
			name: "wigglytuff",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
		},
		{
			id: 40,
			name: "zubat",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
		},
		{
			id: 41,
			name: "golbat",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
		},
		{
			id: 42,
			name: "oddish",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
		},
		{
			id: 43,
			name: "gloom",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
		},
		{
			id: 44,
			name: "vileplume",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
		},
		{
			id: 45,
			name: "paras",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
		},
		{
			id: 46,
			name: "parasect",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
		},
		{
			id: 47,
			name: "venonat",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
		},
		{
			id: 48,
			name: "venomoth",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
		},
		{
			id: 49,
			name: "diglett",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
		},
		{
			id: 50,
			name: "dugtrio",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
		},
		{
			id: 51,
			name: "meowth",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
		},
		{
			id: 52,
			name: "persian",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
		},
		{
			id: 53,
			name: "psyduck",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
		},
		{
			id: 54,
			name: "golduck",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
		},
		{
			id: 55,
			name: "mankey",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
		},
		{
			id: 56,
			name: "primeape",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
		},
		{
			id: 57,
			name: "growlithe",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
		},
		{
			id: 58,
			name: "arcanine",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
		},
		{
			id: 59,
			name: "poliwag",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
		},
		{
			id: 60,
			name: "poliwhirl",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
		},
		{
			id: 61,
			name: "poliwrath",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
		},
		{
			id: 62,
			name: "abra",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
		},
		{
			id: 63,
			name: "kadabra",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
		},
		{
			id: 64,
			name: "alakazam",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
		},
		{
			id: 65,
			name: "machop",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
		},
		{
			id: 66,
			name: "machoke",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
		},
		{
			id: 67,
			name: "machamp",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
		},
		{
			id: 68,
			name: "bellsprout",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
		},
		{
			id: 69,
			name: "weepinbell",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
		},
		{
			id: 70,
			name: "victreebel",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
		},
		{
			id: 71,
			name: "tentacool",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
		},
		{
			id: 72,
			name: "tentacruel",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
		},
		{
			id: 73,
			name: "geodude",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
		},
		{
			id: 74,
			name: "graveler",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
		},
		{
			id: 75,
			name: "golem",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
		},
		{
			id: 76,
			name: "ponyta",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
		},
		{
			id: 77,
			name: "rapidash",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
		},
		{
			id: 78,
			name: "slowpoke",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
		},
		{
			id: 79,
			name: "slowbro",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
		},
		{
			id: 80,
			name: "magnemite",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
		},
		{
			id: 81,
			name: "magneton",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
		},
		{
			id: 82,
			name: "farfetchd",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
		},
		{
			id: 83,
			name: "doduo",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
		},
		{
			id: 84,
			name: "dodrio",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
		},
		{
			id: 85,
			name: "seel",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
		},
		{
			id: 86,
			name: "dewgong",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
		},
		{
			id: 87,
			name: "grimer",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
		},
		{
			id: 88,
			name: "muk",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
		},
		{
			id: 89,
			name: "shellder",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
		},
		{
			id: 90,
			name: "cloyster",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
		},
		{
			id: 91,
			name: "gastly",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
		},
		{
			id: 92,
			name: "haunter",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
		},
		{
			id: 93,
			name: "gengar",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
		},
		{
			id: 94,
			name: "onix",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
		},
		{
			id: 95,
			name: "drowzee",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
		},
		{
			id: 96,
			name: "hypno",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
		},
		{
			id: 97,
			name: "krabby",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
		},
		{
			id: 98,
			name: "kingler",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
		},
		{
			id: 99,
			name: "voltorb",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
		},
		{
			id: 100,
			name: "electrode",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
		},
		{
			id: 101,
			name: "exeggcute",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
		},
		{
			id: 102,
			name: "exeggutor",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
		},
		{
			id: 103,
			name: "cubone",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
		},
		{
			id: 104,
			name: "marowak",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
		},
		{
			id: 105,
			name: "hitmonlee",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
		},
		{
			id: 106,
			name: "hitmonchan",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
		},
		{
			id: 107,
			name: "lickitung",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
		},
		{
			id: 108,
			name: "koffing",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
		},
		{
			id: 109,
			name: "weezing",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
		},
		{
			id: 110,
			name: "rhyhorn",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
		},
		{
			id: 111,
			name: "rhydon",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
		},
		{
			id: 112,
			name: "chansey",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
		},
		{
			id: 113,
			name: "tangela",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
		},
		{
			id: 114,
			name: "kangaskhan",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
		},
		{
			id: 115,
			name: "horsea",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
		},
		{
			id: 116,
			name: "seadra",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
		},
		{
			id: 117,
			name: "goldeen",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
		},
		{
			id: 118,
			name: "seaking",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
		},
		{
			id: 119,
			name: "staryu",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
		},
		{
			id: 120,
			name: "starmie",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
		},
		{
			id: 121,
			name: "mr.mime",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
		},
		{
			id: 122,
			name: "scyther",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
		},
		{
			id: 123,
			name: "jynx",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
		},
		{
			id: 124,
			name: "electabuzz",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
		},
		{
			id: 125,
			name: "magmar",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
		},
		{
			id: 126,
			name: "pinsir",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
		},
		{
			id: 127,
			name: "tauros",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
		},
		{
			id: 128,
			name: "magikarp",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
		},
		{
			id: 129,
			name: "gyarados",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
		},
		{
			id: 130,
			name: "lapras",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
		},
		{
			id: 131,
			name: "ditto",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
		},
		{
			id: 132,
			name: "eevee",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
		},
		{
			id: 133,
			name: "vaporeon",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
		},
		{
			id: 134,
			name: "jolteon",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
		},
		{
			id: 135,
			name: "flareon",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
		},
		{
			id: 136,
			name: "porygon",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
		},
		{
			id: 137,
			name: "omanyte",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
		},
		{
			id: 138,
			name: "omastar",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
		},
		{
			id: 139,
			name: "kabuto",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
		},
		{
			id: 140,
			name: "kabutops",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
		},
		{
			id: 141,
			name: "aerodactyl",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
		},
		{
			id: 142,
			name: "snorlax",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
		},
		{
			id: 143,
			name: "articuno",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
		},
		{
			id: 144,
			name: "zapdos",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
		},
		{
			id: 145,
			name: "moltres",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
		},
		{
			id: 146,
			name: "dratini",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
		},
		{
			id: 147,
			name: "dragonair",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
		},
		{
			id: 148,
			name: "dragonite",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
		},
		{
			id: 149,
			name: "mewtwo",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
		},
		{
			id: 150,
			name: "mew",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
		},
	];

	const start = pokemonTabIndex * ItemPerPage;
	const end = start + ItemPerPage;
	const currentTabs = pokemonList.slice(start, end); // Pokémon de la page actuelle

	const pokemon = currentTabs[pokeIndex]; // Pokémon sélectionné

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
									{pokemon && (
										<PokemonCard id={pokemon.id} name={pokemon.name} imgSrc={pokemon.imgSrc} />
									)}
								</div>
							</section>
							<section id="buttonContainer">
								<button
									type="button"
									onClick={() =>
										setPokeIndex(Math.floor(Math.random() * currentTabs.length))
									}
									className="rounded"
								/>
								<button
									type="button"
									onClick={() =>
										setPokeIndex((prev) => (prev > 0 ? prev - 1 : prev))
									}
									className="back"
								>
									prev
								</button>
								<button
									type="button"
									onClick={() =>
										setPokeIndex((prev) =>
											prev < currentTabs.length - 1 ? prev + 1 : prev,
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
								</section>
								<section className="buttonWrapperBottom">
									<button
										type="button"
										className="yellowSpace"
										onClick={() =>
											setPokemonTabIndex((prev) => (prev > 0 ? prev - 1 : prev))
										}
									>
										LEFT
									</button>
									<button
										type="button"
										className="yellowSpace"
										onClick={() =>
											setPokemonTabIndex((prev) =>
												(prev + 1) * ItemPerPage < pokemonList.length
													? prev + 1
													: prev,
											)
										}
									>
										RIGHT
									</button>
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
