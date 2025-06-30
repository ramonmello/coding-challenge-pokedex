import type { QueryObserverOptions } from '@tanstack/react-query'
import type { ServiceCommand } from '@/core/domain/command/service-command'
import { unwrapService } from './response-adapter'

/**
 * Props for adapting a ServiceCommand into React Query options.
 *
 * @typeParam R - The type returned by the service.
 * @typeParam T - The type of the service parameters; use `void` if none.
 */
export interface ServiceOptions<R, T> {
  service: ServiceCommand<R, T>
  queryKey: unknown[]
  options?: Omit<QueryObserverOptions<R, Error>, 'queryKey' | 'queryFn'>
}

/**
 * Adapts a ServiceCommand into React Query's UseQueryOptions.
 * Internally uses `unwrapService` to execute and unwrap the service.
 *
 * @typeParam R - The type returned by the service.
 * @typeParam T - The type of the service parameters; use `void` if none.
 * @param props - Named props for clearer usage.
 * @returns A function that returns UseQueryOptions ready for `useQuery`.
 */
export function serviceOptions<R, T = void>(props: ServiceOptions<R, T>) {
  const { service, queryKey, options } = props

  return (...args: [T] extends [void] ? [] : [params: T]) => ({
    queryKey,
    queryFn: () => unwrapService<R, T>(service, ...args),
    ...options
  })
}
