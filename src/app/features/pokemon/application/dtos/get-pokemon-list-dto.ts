import type { PokemonListItem } from '@/app/features/pokemon/domain/models'
import type { Paginated, PaginatedDTO } from '@/app/shared/types/paginated'

export type PokemonListItemDTO = {
  name: string
  url: string
}

export const pokemonListMapper = {
  dtoToModel(
    dto: PaginatedDTO<PokemonListItemDTO>
  ): Paginated<PokemonListItem> {
    const extractId = (url: string) => {
      const regex = /\/pokemon\/(\d+)\/?$/
      const match = url.match(regex)

      if (!match) {
        throw new Error(`Invalid Pokemon URL: ${url}`)
      }

      return match[1]
    }

    const extractPagination = (url: string | null) => {
      if (!url) {
        return null
      }

      try {
        const urlObject = new URL(url)
        const offset = urlObject.searchParams.get('offset')
        const limit = urlObject.searchParams.get('limit')

        if (offset !== null && limit !== null) {
          return {
            offset: Number(offset),
            limit: Number(limit)
          }
        }
        return null
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Invalid pagination URL: ${url}`, error)
        return null
      }
    }

    const results = dto.results.map((item) => ({
      name: item.name,
      id: extractId(item.url)
    }))

    return {
      count: dto.count,
      next: extractPagination(dto.next),
      previous: extractPagination(dto.previous),
      results
    }
  }
}
