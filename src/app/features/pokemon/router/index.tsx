import { createRoute, lazyRouteComponent } from '@tanstack/react-router'
import { rootRoute } from '@/main/router/config/router-config'
import { DefaultLayout } from '@/app/shared/components/layouts'
import {
  PokemonNotFound,
  SkeletonPokeCard
} from '@/app/features/pokemon/presentation/components'
import { PokemonListScreen } from '@/app/features/pokemon/presentation/screens/PokemonListScreen'
import { SkeletonPokeList } from '@/app/features/pokemon/presentation/components/SkeletonPokeList'

const LayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'poke-layout',
  component: DefaultLayout
})

const PokemonListRoute = createRoute({
  getParentRoute: () => LayoutRoute,
  path: '/',
  component: PokemonListScreen,
  pendingComponent: () => (
    <div className='flex flex-col items-center p-6'>
      <SkeletonPokeList />
    </div>
  )
})

export const PokemonSearchRoute = createRoute({
  getParentRoute: () => LayoutRoute,
  path: 'search/$name',
  component: lazyRouteComponent(
    () => import('../presentation/screens/PokemonSearchScreen')
  ),
  pendingComponent: () => (
    <div className='flex flex-col items-center p-6'>
      <SkeletonPokeCard />
    </div>
  ),
  errorComponent: PokemonNotFound
})

export const RoutesWithLayout = LayoutRoute.addChildren([
  PokemonListRoute,
  PokemonSearchRoute
])

export const pokemonRoutes = [RoutesWithLayout]
