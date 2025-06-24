import { type DomainException } from "./domain-exception";

export class UnexpectedError implements DomainException {
  type = "UnexpectedError";
  message = "Unexpected error";

  constructor(public error?: any) {}
}
