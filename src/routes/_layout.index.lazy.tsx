import { createLazyFileRoute } from '@tanstack/react-router'
import PokemonListScreen from '@/app/features/pokemon/presentation/screens/PokemonListScreen'

export const Route = createLazyFileRoute('/_layout/')({
  component: PokemonListScreen
})
