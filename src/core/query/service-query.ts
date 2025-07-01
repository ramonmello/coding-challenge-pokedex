import type { QueryObserverOptions } from '@tanstack/react-query'
import type { ServiceCommand } from '@/core/domain/command/service-command'
import { unwrapService } from './response-adapter'

type ExtractServiceCommandTypes<S> =
  S extends ServiceCommand<infer R, infer T>
    ? { response: R; params: T }
    : never

/**
 * Props for adapting a ServiceCommand into React Query options.
 *
 * @typeParam S - The type of the service command, used for type inference.
 */
export interface ServiceOptions<S extends ServiceCommand<any, any>> {
  service: S
  queryKey: readonly unknown[]
  options?: Omit<
    QueryObserverOptions<ExtractServiceCommandTypes<S>['response'], Error>,
    'queryKey' | 'queryFn'
  >
}

/**
 * Adapts a ServiceCommand into React Query's UseQueryOptions.
 * Internally uses `unwrapService` to execute and unwrap the service.
 *
 * @typeParam S - The type of the service command, inferred from the `service` prop.
 * @param props - Named props for clearer usage.
 * @returns A function that returns UseQueryOptions ready for `useQuery`.
 */
export function serviceOptions<S extends ServiceCommand<any, any>>(
  props: ServiceOptions<S>
) {
  type R = ExtractServiceCommandTypes<S>['response']
  type T = ExtractServiceCommandTypes<S>['params']

  const { service, queryKey, options } = props

  return (...args: [T] extends [void] ? [] : [params: T]) => ({
    queryKey: [...queryKey, ...args],
    queryFn: () => unwrapService<R, T>(service, ...args),
    ...options
  })
}
