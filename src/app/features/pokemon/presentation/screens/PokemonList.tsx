import { LanguageSwitcher } from '@/app/shared/components'
import { PokeCard, PokeSearch } from '../components'
import { fakePokemonList } from './tmp_fake_data'

export const PokemonList = () => {
  return (
    <main>
      <header className='sticky top-0 flex flex-col bg-white px-6 pt-4 md:flex-row md:items-center md:justify-between'>
        <div className='flex items-center justify-between md:justify-start md:gap-4'>
          <h1 className='h-11 text-2xl leading-11 font-bold'>Pokédex</h1>
          <div className='flex h-11 gap-2 md:hidden'>
            <LanguageSwitcher />
          </div>
        </div>
        <PokeSearch className='mt-4 h-11 w-full md:order-none md:mt-0 md:w-auto' />
        <div className='hidden h-11 md:block'>
          <LanguageSwitcher />
        </div>
      </header>
      <section className='flex flex-col gap-4 px-6 pt-4'>
        {fakePokemonList.map((pokemon) => (
          <PokeCard key={pokemon.id} {...pokemon} />
        ))}
      </section>
    </main>
  )
}
