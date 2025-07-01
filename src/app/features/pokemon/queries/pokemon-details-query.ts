import { serviceOptions } from '@/core/query'
import {
  getPokemonDetailsService,
  type GetPokemonDetails
} from '../application/services/get-pokemon-details'

export const pokemonDetailsQueryKeys = {
  base: ['pokemon', 'details'] as const,
  detail: (params: GetPokemonDetails.Params) =>
    [...pokemonDetailsQueryKeys.base, params] as const
}

export const pokemonDetailsQueryOptions = serviceOptions({
  service: getPokemonDetailsService,
  queryKey: pokemonDetailsQueryKeys.base,
  options: { staleTime: 5 * 60_000 }
})
