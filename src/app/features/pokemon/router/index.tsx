import { createRoute, lazyRouteComponent } from '@tanstack/react-router'
import { rootRoute } from '@/main/router/config/router-config'
import { DefaultLayout } from '@/app/shared/components/layouts'
import { SkeletonPokeCard } from '@/app/features/pokemon/presentation/components'

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
  ),
  pendingComponent: () => (
    <div className='flex flex-col items-center p-6'>
      <SkeletonPokeCard />
    </div>
  ),
  errorComponent: () => (
    <div className='flex flex-col items-center p-6'>
      <div className='flex flex-col items-center gap-4 text-center'>
        <div className='text-6xl'>😢</div>
        <h2 className='text-xl font-semibold text-gray-800'>
          Pokémon não encontrado
        </h2>
        <p className='max-w-md text-gray-600'>
          Desculpe, não conseguimos encontrar o Pokémon que você está
          procurando. Verifique se o nome está correto e tente novamente.
        </p>
      </div>
    </div>
  )
})

export const RoutesWithLayout = LayoutRoute.addChildren([
  PokemonListRoute,
  PokemonSearchRoute
])

export const pokemonRoutes = [RoutesWithLayout]
