import { LanguageSwitcher } from '@/app/shared/components'
import { PokeSearch, PokemonGrid } from '../components'
import { pokemonListQueryOptions } from '@/app/features/pokemon/queries'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import type {
  PokemonDetails,
  PokemonListItem
} from '@/app/features/pokemon/domain/models'

export const PokemonList = () => {
  const [searchResult, setSearchResult] = useState<PokemonListItem[] | null>(
    null
  )

  const { data } = useSuspenseInfiniteQuery(pokemonListQueryOptions())
  const pages = data?.pages
  const infiniteQueryResults = pages?.flatMap((page) => page.results)

  const handleSearch = useCallback((pokemon: PokemonDetails) => {
    setSearchResult([{ name: pokemon.name, id: pokemon.id.toString() }])
  }, [])

  const handleClear = useCallback(() => {
    setSearchResult(null)
  }, [])

  const results = searchResult ?? infiniteQueryResults

  return (
    <main className='flex h-dvh flex-col'>
      <header className='flex flex-col px-6 pt-4 md:flex-row md:items-center md:justify-between'>
        <div className='flex items-center justify-between md:justify-start md:gap-4'>
          <h1 className='h-11 text-2xl leading-11 font-bold'>Pokédex</h1>
          <div className='flex h-11 gap-2 md:hidden'>
            <LanguageSwitcher />
          </div>
        </div>
        <PokeSearch
          className='mt-4 h-11 w-full md:order-none md:mt-0 md:w-80'
          onSearch={handleSearch}
          onClear={handleClear}
        />
        <div className='hidden h-11 md:block'>
          <LanguageSwitcher />
        </div>
      </header>
      <PokemonGrid results={results} />
    </main>
  )
}
