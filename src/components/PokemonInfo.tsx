import { useState,useEffect} from "react";
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
  }
  const PokemonInfo: React.FC<PokemonInfoProps> = ({ id }) => {
    const [flavorText, setFlavorText] = useState<string | null>(null); // Texte en français ou null si indisponible
    const [loading, setLoading] = useState<boolean>(true); // Indicateur de chargement
    const [error, setError] = useState<string | null>(null); // Message d'erreur ou null
  
    useEffect(() => {
      const fetchSpeciesData = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id+1}`);
          if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données !");
          }
  
          // Typage explicite de la réponse JSON
          const data: PokemonInfoResponse = await response.json();
  
          // Extraire le texte en français
          const frenchText = data.flavor_text_entries.find(
            (entry) => entry.language.name === "fr"
          )?.flavor_text;
  
          // Nettoyage du texte si nécessaire
          const cleanText = frenchText ? frenchText.replace(/\n|\f/g, " ") : null;
  
          setFlavorText(cleanText);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message); // Utilisation du message d'erreur
          } else {
            setError("Une erreur inconnue est survenue.");
          }
        } finally {
          setLoading(false);
        }
      };
  
      fetchSpeciesData();
    }, [id]);
  
    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;
  
    return (
      <div>
        <p>Description:</p>
        <p>{flavorText || "Description non disponible en français."}</p>
      </div>
    );
  };

export default PokemonInfo;