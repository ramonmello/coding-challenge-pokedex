import type { PokemonDetails } from '@/app/features/pokemon/domain/models'

export type PokemonDetailsDTO = {
  abilities: AbilityEntry[]
  stats: PokemonStat[]
  types: PokemonType[]
  weight: number
  height: number
  sprites: Sprites
  name: string
  id: number
}

export const pokemonDetailsMapper = {
  dtoToModel(dto: PokemonDetailsDTO): PokemonDetails {
    return {
      id: dto.id,
      name: dto.name,
      abilities: dto.abilities.map((a) => a.ability.name),
      stats: [
        ...dto.stats.map((s) => ({
          name: s.stat.name,
          value: s.base_stat
        })),
        {
          name: 'total',
          value: dto.stats.reduce((sum, s) => sum + s.base_stat, 0)
        }
      ],
      types: dto.types.map((t) => t.type.name),
      weight: dto.weight,
      height: dto.height,
      image: dto.sprites.other.dream_world.front_default
    }
  }
}

type Ability = {
  name: string
  url: string
}

type AbilityEntry = {
  ability: Ability
  is_hidden: boolean
  slot: number
}

type StatInfo = {
  name: string
  url: string
}

type PokemonStat = {
  base_stat: number
  effort: number
  stat: StatInfo
}

type TypeInfo = {
  name: string
  url: string
}

type PokemonType = {
  slot: number
  type: TypeInfo
}

type Sprites = {
  other: {
    dream_world: {
      front_default: string
    }
  }
}
