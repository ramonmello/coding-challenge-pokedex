import { serviceOptions } from '@/core/query'
import {
  getPokemonListService,
  type GetPokemonList
} from '../application/services/get-pokemon-list'

export const pokeListOptions = serviceOptions<
  GetPokemonList.Response,
  GetPokemonList.Params
>({
  service: getPokemonListService,
  queryKey: ['pokemon', 'list'],
  options: { staleTime: 5 * 60_000 }
})
