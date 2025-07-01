import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/main/router/config/router-config'
import { UnderMaintenance } from '../presentation/screens'

const UnderMaintenanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/under-maintenance',
  component: UnderMaintenance
})

export const generalRoutes = [UnderMaintenanceRoute]
