import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/main/router/config/router-config";
import { PokemonList } from "../presentation/screens";

const PokemonListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pokemon-list",
  component: PokemonList,
});

export const pokemonRoutes = [PokemonListRoute];
