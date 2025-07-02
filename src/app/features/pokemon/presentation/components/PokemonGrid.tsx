import { Suspense } from 'react'
import { PokeCard } from './PokeCard'
import { SkeletonPokeCard } from './SkeletonPokeCard'

import type { PokemonListItem } from '@/app/features/pokemon/domain/models'

type PokemonGridProps = {
  results: PokemonListItem[] | undefined
}

export const PokemonGrid = ({ results }: PokemonGridProps) => {
  return (
    <section className='flex-grow overflow-y-auto'>
      <ul className='grid grid-cols-1 gap-4 p-6 md:mx-auto md:max-w-[988px] md:grid-cols-3'>
        {results?.map(({ name, id }) => (
          <Suspense key={`${name}-${id}`} fallback={<SkeletonPokeCard />}>
            <PokeCard name={name} />
          </Suspense>
        ))}
      </ul>
    </section>
  )
}
