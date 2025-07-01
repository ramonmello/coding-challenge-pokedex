import { Suspense } from 'react'
import { PokeCard } from './PokeCard'
import { SkeletonPokeCard } from './SkeletonPokeCard'

import type { PokemonListItem } from '@/app/features/pokemon/domain/models'

type PokemonGridProps = {
  results: PokemonListItem[] | undefined
  fetchNextPage: () => void
}

export const PokemonGrid = ({ results, fetchNextPage }: PokemonGridProps) => {
  return (
    <>
      <ul className='grid grid-cols-1 gap-4 p-6 md:mx-auto md:mt-4 md:max-w-[988px] md:grid-cols-3'>
        {results?.map(({ name, id }) => (
          <Suspense key={`${name}-${id}`} fallback={<SkeletonPokeCard />}>
            <PokeCard name={name} />
          </Suspense>
        ))}
      </ul>
      <button onClick={() => fetchNextPage()}>load more</button>
    </>
  )
}
