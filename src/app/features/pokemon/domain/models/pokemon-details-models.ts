export type PokemonDetails = {
  id: number
  name: string
  abilities: string[]
  stats: PokemonStat[]
  types: string[]
  weight: number
  height: number
  image: string
}

export type PokemonStat = {
  name: string
  value: number
}
