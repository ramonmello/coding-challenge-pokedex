import { serviceQueryOptions } from "@/core/query";
import { getPokemonListService } from "../application/services/get-pokemon-list";

const key = () => ["pokemon", "list"] as const;

export const pokemonListQueryOptions = serviceQueryOptions(
  key,
  () => getPokemonListService,
  { staleTime: 5 * 60_000 }
);
