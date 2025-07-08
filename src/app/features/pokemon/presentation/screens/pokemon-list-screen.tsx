import { PokeGrid } from '../components/poke-grid'
import { pokemonListQueryOptions } from '@/app/features/pokemon/queries/pokemon-list-query'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

export const PokemonListScreen = () => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useSuspenseInfiniteQuery(pokemonListQueryOptions())
  const pages = data?.pages
  const results = pages?.flatMap((page) => page.results)

  return (
    <PokeGrid
      results={results}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  )
}
