import type { PokemonListItem } from '@/app/features/pokemon/domain/models'

export type PokemonListItemDTO = {
  name: string
  url: string
}

export const pokemonListMapper = {
  dtoToModel(dto: PokemonListItemDTO[]): PokemonListItem[] {
    const extractId = (url: string) => {
      const regex = /\/pokemon\/(\d+)\/?$/
      const match = url.match(regex)

      if (!match) {
        throw new Error(`Invalid Pokemon URL: ${url}`)
      }

      return match[1]
    }

    return dto.map((item) => ({
      name: item.name,
      id: extractId(item.url)
    }))
  }
}
