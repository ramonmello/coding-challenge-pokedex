import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/main/router/config/router-config";
import { PokemonList } from "../presentation/screens";
import { pokemonsPageQueryOptions } from "../queries/list-pokemons";

const PokemonListRoute = createRoute({
  getParentRoute: () => rootRoute,
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(pokemonsPageQueryOptions());
  },
  path: "/pokemon",
  component: PokemonList,
  // TODO: Add a loading component
  pendingComponent: () => <div>Loading...</div>,
});

export const pokemonRoutes = [PokemonListRoute];
