import { useSuspenseQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { pokemonsPageQueryOptions } from "../../queries/list-pokemons";

export const PokemonList = () => {
  const { data } = useSuspenseQuery(pokemonsPageQueryOptions());

  const handleShowToast = () => {
    toast.success("Lista de Pokémons carregada com sucesso!", {
      description: `Encontrados ${data?.results?.length || 0} pokémons`,
    });
  };

  return (
    <div>
      <h1>PokemonList</h1>
      <button
        onClick={handleShowToast}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Mostrar Toast
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
