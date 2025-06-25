import { useSuspenseQuery } from "@tanstack/react-query";
import { pokemonsPageQueryOptions } from "../../queries/list-pokemons";

export const PokemonList = () => {
  const { data } = useSuspenseQuery(pokemonsPageQueryOptions());

  return (
    <div>
      <h1>PokemonList</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
