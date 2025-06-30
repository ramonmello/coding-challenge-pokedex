import { LanguageSwitcher } from '@/app/shared/components'
import { PokeCard, PokeSearch } from '../components'
import { pokeListOptions } from '@/app/features/pokemon/queries'
import { useQuery } from '@tanstack/react-query'
import { Suspense } from 'react'
import { SkeletonPokeCard } from '@/app/features/pokemon/presentation/components'

export const PokemonList = () => {
  const { data } = useQuery(pokeListOptions())

  return (
    <main>
      <header className='sticky top-0 flex flex-col bg-white px-6 pt-4 md:flex-row md:items-center md:justify-between'>
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
      <ul className='flex flex-col gap-4 p-6 md:mx-auto md:mt-4 md:grid md:max-w-[988px] md:grid-cols-3 md:gap-4'>
        {data?.results.map((pokemon) => (
          <Suspense key={pokemon.name} fallback={<SkeletonPokeCard />}>
            <PokeCard name={pokemon.name} />
          </Suspense>
        ))}
      </ul>
    </main>
  )
}
