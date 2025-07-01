import { createRoute, lazyRouteComponent } from '@tanstack/react-router'
import { rootRoute } from '@/main/router/config/router-config'

const UnderMaintenanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/under-maintenance',
  component: lazyRouteComponent(
    () => import('../presentation/screens/under-maintenance')
  )
})

export const generalRoutes = [UnderMaintenanceRoute]
