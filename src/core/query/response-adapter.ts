import type { ServiceCommand } from "@/core/domain/command/service-command";

/**
 * Converts the Either coming from a ServiceCommand into
 *   - resolve(data)  when Success
 *   - throw(error)   when Error
 */
export async function unwrapService<R>(svc: ServiceCommand<R>): Promise<R> {
  const result = await svc.execute();

  if (result.isError()) {
    // DomainException will be caught by QueryClient's onError
    throw result.value;
  }

  return result.value;
}
