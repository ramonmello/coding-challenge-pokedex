import type {
  InfiniteData,
  InfiniteQueryObserverOptions,
  QueryFunctionContext
} from '@tanstack/react-query'
import type { ServiceCommand } from '@/core/domain/command/service-command'
import type { Paginated, PaginationParams } from '@/core/domain/types/paginated'
import { unwrapService } from './response-adapter'

/**
 * Props for adapting a ServiceCommand into React Query options.
 *
 * @typeParam TItem - The type of the items within the paginated response.
 */
export interface ServiceInfiniteOptions<TItem> {
  service: ServiceCommand<Paginated<TItem>, PaginationParams>
  queryKey: readonly unknown[]
  initialPageParam: PaginationParams
  options?: Omit<
    InfiniteQueryObserverOptions<
      Paginated<TItem>,
      Error,
      InfiniteData<Paginated<TItem>>,
      readonly unknown[],
      PaginationParams
    >,
    | 'queryKey'
    | 'queryFn'
    | 'initialPageParam'
    | 'getNextPageParam'
    | 'getPreviousPageParam'
  >
}

/**
 * Adapts a ServiceCommand into React Query's `infiniteQueryOptions`.
 * Internally uses `unwrapService` to execute and unwrap the service.
 *
 * @typeParam TItem - The type of the items within the paginated response.
 * @param props - The properties for the adaptation.
 * @returns An options object ready to be used with `infiniteQueryOptions`.
 */
export function serviceInfiniteOptions<TItem>(
  props: ServiceInfiniteOptions<TItem>
) {
  const { service, queryKey, options, initialPageParam } = props

  return () => ({
    queryKey,
    queryFn: ({
      pageParam
    }: QueryFunctionContext<readonly unknown[], PaginationParams>) =>
      unwrapService(service, pageParam),
    initialPageParam,
    getNextPageParam: (lastPage: Paginated<TItem>) =>
      lastPage.next ?? undefined,
    getPreviousPageParam: (firstPage: Paginated<TItem>) =>
      firstPage.previous ?? undefined,
    ...options
  })
}
