import { POKEMON_API_ROUTES } from "@/app/features/pokemon/application/api/routes";
import { type ServiceCommand } from "@/core/domain/command/service-command";
import { httpClient } from "@/core/infra/http";

import { GetPokemonList } from "./get-pokemon-list";

export const getPokemonListService: ServiceCommand<GetPokemonList.Response> =
  new GetPokemonList(httpClient, POKEMON_API_ROUTES.POKEMON_LIST);

export type { GetPokemonList };
