import { Suspense, useEffect, useRef } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { PokeCard } from './PokeCard'
import { SkeletonPokeCard } from './SkeletonPokeCard'

import type { PokemonListItem } from '@/app/features/pokemon/domain/models'

type PokemonGridProps = {
  results: PokemonListItem[] | undefined
  hasNextPage: boolean
  isFetchingNextPage: boolean
  fetchNextPage: () => void
}

export const PokemonGrid = ({
  results,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage
}: PokemonGridProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: results?.length ?? 0,
    estimateSize: () => 158,
    getScrollElement: () => scrollRef.current
  })

  const virtualItems = virtualizer.getVirtualItems()

  useEffect(() => {
    const lastItem = virtualItems[virtualItems.length - 1]
    if (
      !hasNextPage ||
      isFetchingNextPage ||
      !lastItem ||
      lastItem.index < (results?.length ?? 0) - 1
    )
      return

    fetchNextPage()
  }, [virtualItems, hasNextPage, isFetchingNextPage, fetchNextPage, results])

  return (
    <div ref={scrollRef} className='flex-grow overflow-y-auto'>
      <ul
        className='relative flex flex-col gap-4 p-6 md:mx-auto md:grid md:max-w-[988px] md:grid-cols-3'
        style={{ height: `${virtualizer.getTotalSize()}px` }}
      >
        {virtualItems.map((vItem) => {
          const { name, id } = results?.[vItem.index] ?? {}

          if (!name) return null

          return (
            <li
              key={vItem.key}
              style={{
                transform: `translateY(${vItem.start}px)`,
                height: `${vItem.size}px`
              }}
              className='absolute top-0 left-0 w-full'
              data-index={vItem.index}
            >
              <Suspense key={`${name}-${id}`} fallback={<SkeletonPokeCard />}>
                <PokeCard name={name} />
              </Suspense>
            </li>
          )
        })}
        {/* {results?.map(({ name, id }) => (
          <Suspense key={`${name}-${id}`} fallback={<SkeletonPokeCard />}>
            <PokeCard name={name} />
          </Suspense>
        ))} */}
      </ul>
    </div>
  )
}
