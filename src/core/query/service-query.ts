import {
  type QueryObserverOptions,
  keepPreviousData,
  type QueryKey,
} from "@tanstack/react-query";
import type { ServiceCommand } from "@/core/domain/command/service-command";
import { unwrapService } from "./response-adapter";

/**
 * Factory that returns *queryOptions* compatible with TanStack Query
 * from a ServiceCommand.
 */
export function serviceQueryOptions<
  TArgs extends any[],
  TResult,
  TError = unknown
>(
  keyFn: (...args: TArgs) => QueryKey,
  serviceFactory: (...args: TArgs) => ServiceCommand<TResult>,
  base?: Omit<QueryObserverOptions<TResult, TError>, "queryKey" | "queryFn">
) {
  return (...args: TArgs) => ({
    queryKey: keyFn(...args),
    queryFn: () => unwrapService(serviceFactory(...args)),
    placeholderData: keepPreviousData,
    ...base,
  });
}
