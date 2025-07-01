import { serviceInfiniteOptions } from '@/core/query/service-infinite-query'
import { getPokemonListService } from '../application/services/get-pokemon-list'

const pokemonListQueryKeys = {
  all: ['pokemon-list'] as const
}

export const pokemonListQueryOptions = serviceInfiniteOptions({
  queryKey: pokemonListQueryKeys.all,
  service: getPokemonListService,
  initialPageParam: { offset: 0, limit: 10 }
})
