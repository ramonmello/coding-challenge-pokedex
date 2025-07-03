import { QueryClient, QueryCache } from '@tanstack/react-query'
import { globalQueryErrorHandler } from './error-handler'

const queryCache = new QueryCache({ onError: globalQueryErrorHandler })

export const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 60_000, // 1 minute
      gcTime: 5 * 60_000, // 5 minutes
      refetchOnWindowFocus: false
    },
    mutations: { retry: 1 }
  }
})
