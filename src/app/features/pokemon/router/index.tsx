import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/main/router/config/router-config";
import { PokemonList } from "../presentation/screens";
import { pokemonsPageQueryOptions } from "../queries/list-pokemons";

const PokemonListRoute = createRoute({
  getParentRoute: () => rootRoute,
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(pokemonsPageQueryOptions());
  },
  path: "/pokemon-list",
  component: PokemonList,
  pendingComponent: () => <div>Loading...</div>,
});

export const pokemonRoutes = [PokemonListRoute];
