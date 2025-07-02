import { LanguageSwitcher } from '@/app/shared/components'
import { PokeSearch, PokemonGrid } from '../components'
import { pokemonListQueryOptions } from '@/app/features/pokemon/queries'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

export const PokemonList = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    fetchPreviousPage,
    hasPreviousPage
  } = useSuspenseInfiniteQuery(pokemonListQueryOptions())
  const pages = data?.pages
  const results = pages?.flatMap((page) => page.results)

  return (
    <main className='flex h-dvh flex-col'>
      <header className='flex flex-col px-6 pt-4 md:flex-row md:items-center md:justify-between'>
        <div className='flex items-center justify-between md:justify-start md:gap-4'>
          <h1 className='h-11 text-2xl leading-11 font-bold'>Pokédex</h1>
          <div className='flex h-11 gap-2 md:hidden'>
            <LanguageSwitcher />
          </div>
        </div>
        <PokeSearch className='mt-4 h-11 w-full md:order-none md:mt-0 md:w-80' />
        <div className='hidden h-11 md:block'>
          <LanguageSwitcher />
        </div>
      </header>
      <PokemonGrid
        results={results}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        fetchPreviousPage={fetchPreviousPage}
        hasPreviousPage={hasPreviousPage}
      />
    </main>
  )
}
