import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/main/router/config/router-config";
import { PokemonList } from "../presentation/screens";
import { pokemonListQueryOptions } from "../queries/pokemon-list";

const PokemonListRoute = createRoute({
  getParentRoute: () => rootRoute,
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(pokemonListQueryOptions());
  },
  path: "/pokemon",
  component: PokemonList,
  // TODO: Add a loading component
  pendingComponent: () => <div>Loading...</div>,
});

export const pokemonRoutes = [PokemonListRoute];
