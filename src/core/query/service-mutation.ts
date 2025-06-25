import { unwrapService } from "./response-adapter";
import type { ServiceCommand } from "@/core/domain/command/service-command";

/**
 * Factory that returns *mutationOptions* compatible with TanStack Query
 * from a ServiceCommand.
 */
export function serviceMutationOptions<TVars, TResult>(
  svcFactory: (vars: TVars) => ServiceCommand<TResult>
) {
  return {
    mutationFn: (vars: TVars) => unwrapService(svcFactory(vars)),
  };
}
