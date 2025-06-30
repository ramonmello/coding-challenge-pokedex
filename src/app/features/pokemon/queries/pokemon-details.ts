import { serviceOptions } from '@/core/query'
import {
  getPokemonDetailsService,
  type GetPokemonDetails
} from '../application/services/get-pokemon-details'

export const pokeDetailsOptions = serviceOptions<
  GetPokemonDetails.Response,
  GetPokemonDetails.Params
>({
  service: getPokemonDetailsService,
  queryKey: ['pokemon', 'details'],
  options: { staleTime: 5 * 60_000 }
})
