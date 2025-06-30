import { type Either } from '@/core/domain/either/either'
import { type DomainException } from '@/core/domain/exceptions'

export interface ServiceCommand<R = unknown, T = void> {
  /**
   * Executes this command.
   *
   * @typeParam R - The type of the successful response value.
   * @typeParam T - The type of the input parameters. Use `void` if no parameters are required.
   *
   * @param params
   *  * When `T` is not `void`, this must be an object of type `T` containing all necessary input.
   *  * When `T` is `void`, no arguments should be passed.
   *
   * @returns
   *   A `Promise` that resolves to a {@link ServiceCommand.Response<R>},
   *   which is either a `DomainException` on failure or a value of type `R` on success.
   */
  execute(
    ...args: [T] extends [void] ? [] : [params: T]
  ): Promise<ServiceCommand.Response<R>>
}

export namespace ServiceCommand {
  export type Response<R = unknown> = Either<ResponseError, R>
  export type ResponseError = DomainException
}
