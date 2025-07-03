import { createLazyFileRoute } from '@tanstack/react-router'
import PokemonSearchScreen from '@/app/features/pokemon/presentation/screens/PokemonSearchScreen'

export const Route = createLazyFileRoute('/_layout/search/$name')({
  component: PokemonSearchScreen
})
