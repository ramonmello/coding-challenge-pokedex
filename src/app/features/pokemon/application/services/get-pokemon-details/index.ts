import { POKEMON_API_ROUTES } from "@/app/features/pokemon/application/api/routes";
import { type ServiceCommand } from "@/core/domain/command/service-command";
import { httpClient } from "@/core/infra/http";

import { GetPokemonDetails } from "./get-pokemon-details";

export const getPokemonDetailsService: ServiceCommand<GetPokemonDetails.Response> =
  new GetPokemonDetails(httpClient, POKEMON_API_ROUTES.POKEMON_DETAIL);

export type { GetPokemonDetails };
