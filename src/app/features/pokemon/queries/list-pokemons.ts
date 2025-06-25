import { serviceQueryOptions } from "@/core/query";
import { listPokemonsService } from "../application/services/list-pokemons";

const key = () => ["pokemon", "list"] as const;

export const pokemonsPageQueryOptions = serviceQueryOptions(
  key,
  () => listPokemonsService,
  { staleTime: 5 * 60_000 }
);
