import { Suspense, useEffect, useRef } from 'react'
import { useVirtualizer, Virtualizer } from '@tanstack/react-virtual'
import type { PokemonListItem } from '@/app/features/pokemon/domain/models'
import { PokeCard } from './PokeCard'
import { SkeletonPokeCard } from './SkeletonPokeCard'

import { useMediaQuery } from '@/app/shared/hooks/useMidiaQuery'

type PokemonGridProps = {
  results: PokemonListItem[] | undefined
  hasNextPage: boolean
  isFetchingNextPage: boolean
  fetchNextPage: () => void
}

export const PokeGrid = ({
  results,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage
}: PokemonGridProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const itemsPerRow = isMobile ? 1 : 3

  const rowCount = Math.ceil((results?.length ?? 0) / itemsPerRow)

  const virtualizer = useVirtualizer({
    count: rowCount,
    estimateSize: () => 158,
    getScrollElement: () => scrollRef.current,
    overscan: 3
  })

  const virtualItems = virtualizer.getVirtualItems()

  useEffect(() => {
    const lastItem = virtualItems[virtualItems.length - 1]
    if (
      !hasNextPage ||
      isFetchingNextPage ||
      !lastItem ||
      lastItem.index < rowCount - 1
    )
      return

    fetchNextPage()
  }, [virtualItems, hasNextPage, isFetchingNextPage, fetchNextPage, rowCount])

  return (
    <div ref={scrollRef} className='flex-grow overflow-y-auto'>
      <div
        className='relative flex flex-col gap-4 p-6 md:mx-auto md:max-w-5xl'
        style={{ height: `${virtualizer.getTotalSize()}px` }}
      >
        <ul
          style={{ transform: `translateY(${virtualItems[0]?.start ?? 0}px)` }}
        >
          {virtualItems.map(({ index, key }) => {
            const start = index * itemsPerRow
            const end = start + itemsPerRow
            const items = results?.slice(start, end) ?? []

            if (!items.length) return null

            return (
              <VirtualRow
                items={items}
                key={key}
                index={index}
                virtualizer={virtualizer}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

type VirtualRowProps = {
  items: PokemonListItem[]
  index: number
  virtualizer: Virtualizer<HTMLDivElement, Element>
}

const VirtualRow = ({ items, index, virtualizer }: VirtualRowProps) => {
  return (
    <li className='py-2' data-index={index} ref={virtualizer.measureElement}>
      <div className='flex gap-4'>
        {items.map(({ id, name }) => (
          <Suspense key={`${name}-${id}`} fallback={<SkeletonPokeCard />}>
            <PokeCard name={name} />
          </Suspense>
        ))}
      </div>
    </li>
  )
}
