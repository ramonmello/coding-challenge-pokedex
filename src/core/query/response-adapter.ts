import type { ServiceCommand } from '@/core/domain/command/service-command'

export async function unwrapService<R, T>(
  service: ServiceCommand<R, T>,
  ...args: [T] extends [void] ? [] : [params: T]
): Promise<R> {
  const response = await service.execute(...args)

  if (response.isError()) {
    throw response.value
  }

  return response.value
}
