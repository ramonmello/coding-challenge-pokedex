import type { ServiceCommand } from "@/core/domain/command/service-command";

/**
 * Converte o Either vindo de um ServiceCommand em
 *   - resolve(data)  quando Success
 *   - throw(error)   quando Error
 */
export async function unwrapService<R>(svc: ServiceCommand<R>): Promise<R> {
  const result = await svc.execute();

  if (result.isError()) {
    // DomainException será capturada pelo onError do QueryClient
    throw result.value;
  }

  return result.value;
}
