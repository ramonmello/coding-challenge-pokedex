import type { DomainException } from '@/core/domain/exceptions/domain-exception'

export function globalQueryErrorHandler(err: unknown) {
  const e = err as Partial<DomainException>

  console.error(e)
}
