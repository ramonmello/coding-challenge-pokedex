import { createLazyFileRoute } from '@tanstack/react-router'
import UnderMaintenanceScreen from '@/app/features/general/presentation/screens/under-maintenance'

export const Route = createLazyFileRoute('/under-maintenance')({
  component: UnderMaintenanceScreen
})
