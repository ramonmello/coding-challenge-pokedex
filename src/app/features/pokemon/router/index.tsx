import { createRoute, lazyRouteComponent } from '@tanstack/react-router'
import { rootRoute } from '@/main/router/config/router-config'
import { PokeLayout } from '../presentation/components'

const LayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'poke-layout',
  component: PokeLayout
})

const PokemonListRoute = createRoute({
  getParentRoute: () => LayoutRoute,
  path: '/',
  component: lazyRouteComponent(
    () => import('../presentation/screens/PokemonListScreen')
  )
})

export const PokemonSearchRoute = createRoute({
  getParentRoute: () => LayoutRoute,
  path: 'search/$name',
  component: lazyRouteComponent(
    () => import('../presentation/screens/PokemonSearchScreen')
  )
})

export const RoutesWithLayout = LayoutRoute.addChildren([
  PokemonListRoute,
  PokemonSearchRoute
])

export const pokemonRoutes = [RoutesWithLayout]
