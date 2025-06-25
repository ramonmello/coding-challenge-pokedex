import type { DomainException } from "@/core/domain/exceptions";

export function globalQueryErrorHandler(err: unknown) {
  const e = err as Partial<DomainException>;

  console.error(e);
}
