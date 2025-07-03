import { PokeGrid } from '../components'
import { pokemonListQueryOptions } from '@/app/features/pokemon/queries'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

const PokemonListScreen = () => {
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

export default PokemonListScreen
