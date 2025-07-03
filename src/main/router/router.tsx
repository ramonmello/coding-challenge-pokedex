import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'
import { queryClient } from '@/core/query'

const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const Router = () => <RouterProvider router={router} />
