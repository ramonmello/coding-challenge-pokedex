import { type DomainException } from "./domain-exception";

export class AccessDeniedError implements DomainException {
  type = "AccessDeniedError";
  message = "Access denied";

  constructor(public error?: any) {}
}
