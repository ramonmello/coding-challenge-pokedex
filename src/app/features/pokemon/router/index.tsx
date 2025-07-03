import { createRoute, lazyRouteComponent } from '@tanstack/react-router'
import { rootRoute } from '@/main/router/config/router-config'
import { DefaultLayout } from '@/app/shared/components/layouts'

const LayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'poke-layout',
  component: DefaultLayout
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
