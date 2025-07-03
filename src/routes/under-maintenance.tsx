import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router'

export const Route = createFileRoute('/under-maintenance')({
  component: lazyRouteComponent(
    () =>
      import('@/app/features/general/presentation/screens/under-maintenance')
  )
})
