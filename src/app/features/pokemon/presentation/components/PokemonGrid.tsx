import { Suspense, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { PokeCard } from './PokeCard'
import { SkeletonPokeCard } from './SkeletonPokeCard'

import type { PokemonListItem } from '@/app/features/pokemon/domain/models'

type PokemonGridProps = {
  results: PokemonListItem[] | undefined
  fetchNextPage: () => void
  fetchPreviousPage: () => void
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export const PokemonGrid = ({
  results,
  fetchNextPage,
  hasNextPage,
  hasPreviousPage,
  fetchPreviousPage
}: PokemonGridProps) => {
  const containerRef = useRef<HTMLElement | null>(null)

  const { ref: topSentinelRef, inView: topInView } = useInView({
    root: containerRef.current,
    rootMargin: '200px 0px'
  })

  const { ref: bottomSentinelRef, inView: bottomInView } = useInView({
    root: containerRef.current,
    rootMargin: '200px 0px'
  })

  useEffect(() => {
    if (topInView && hasPreviousPage) {
      fetchPreviousPage()
    }
  }, [topInView, hasPreviousPage, fetchPreviousPage])

  useEffect(() => {
    if (bottomInView && hasNextPage) {
      fetchNextPage()
    }
  }, [bottomInView, hasNextPage, fetchNextPage])

  return (
    <section ref={containerRef} className='flex-grow overflow-y-auto'>
      <div ref={topSentinelRef} aria-hidden />
      <ul className='grid grid-cols-1 gap-4 p-6 md:mx-auto md:max-w-[988px] md:grid-cols-3'>
        {results?.map(({ name, id }) => (
          <Suspense key={`${name}-${id}`} fallback={<SkeletonPokeCard />}>
            <PokeCard name={name} />
          </Suspense>
        ))}
      </ul>
      <div ref={bottomSentinelRef} aria-hidden />
    </section>
  )
}
