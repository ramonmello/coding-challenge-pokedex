import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Toaster } from '@/app/shared/components/ui/sonner'
import { queryClient } from '@/core/query'
import { Router } from './router/router'
import '@/main/config/i18n/init'
import './config/styles/globals.css'

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster position='top-right' />
    <Router />
    <ReactQueryDevtools buttonPosition='bottom-left' />
  </QueryClientProvider>
)
