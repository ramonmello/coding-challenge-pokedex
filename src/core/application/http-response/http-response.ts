import {
  type HttpResponse,
  HttpStatusCode
} from '@/core/application/protocols/http-client'
import { type ServiceCommand } from '@/core/domain/command/service-command'
import { error, success } from '@/core/domain/either/either'
import { AccessDeniedError } from '@/core/domain/exceptions/access-denied-error'
import { UnexpectedError } from '@/core/domain/exceptions/unexpected-error'

import {
  type CombinedPredicated,
  combinedPredicates
} from './combined-predicates'

export class RequestResponse<R> {
  private constructor(private readonly _response: R) {
    Object.freeze(this)
  }

  public static handle<R>(
    httpResponse: HttpResponse<R>
  ): ServiceCommand.Response<RequestResponse<R>> {
    try {
      const { statusCode } = httpResponse

      if (this.isSuccess(statusCode)) {
        return success(new RequestResponse(httpResponse.body))
      }

      const predicates: CombinedPredicated<ServiceCommand.ResponseError> = [
        [this.isForbidden, new AccessDeniedError()]
      ]

      const errors = combinedPredicates({
        value: statusCode,
        predicatePairs: predicates
      })

      if (errors.isError()) {
        return error(errors.value)
      }

      return error(new UnexpectedError(errors.value))
    } catch (err) {
      return error(new UnexpectedError(err))
    }
  }

  private static isSuccess(statusCode: HttpStatusCode): boolean {
    return statusCode >= 200 && statusCode <= 299
  }

  private static isForbidden(statusCode: HttpStatusCode): boolean {
    return statusCode === HttpStatusCode.FORBIDDEN
  }

  // private static isUnauthorized(statusCode: HttpStatusCode): boolean {
  //   return statusCode === HttpStatusCode.UNAUTHORIZED;
  // }

  // private static isNotFound(statusCode: HttpStatusCode): boolean {
  //   return statusCode === HttpStatusCode.NOT_FOUND;
  // }

  get response(): R {
    return this._response
  }
}
