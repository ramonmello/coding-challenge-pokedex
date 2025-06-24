import { GENERAL_API_ROUTES } from "@/app/features/general/application/api/routes";
import { type ServiceCommand } from "@/core/domain/command/service-command";
import { httpClient } from "@/core/infra/http";

import { ListPokemons } from "./list-pokemons";

export const listPokemonsService: ServiceCommand<ListPokemons.Response> =
  new ListPokemons(httpClient, GENERAL_API_ROUTES.LIST_POKEMONS);

export type { ListPokemons };
