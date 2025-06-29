// import { type GetPokemonDetails } from "@/app/features/auth/domain/models";
import { RequestResponse } from "@/core/application/http-response/http-response";
import type { HttpClient } from "@/core/application/protocols";
import { HttpMethod } from "@/core/application/protocols";
import { type ServiceCommand } from "@/core/domain/command/service-command";
import { error, success } from "@/core/domain/either/either";

export class GetPokemonDetails
  implements ServiceCommand<GetPokemonDetails.Response>
{
  constructor(
    private readonly httpClient: HttpClient<GetPokemonDetails.Response>,
    private readonly url: string
  ) {}

  async execute(
    params: GetPokemonDetails.Params
  ): Promise<ServiceCommand.Response<GetPokemonDetails.Response>> {
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.GET,
      url: `${this.url}/${params.name}`,
    });

    const responseOrError = RequestResponse.handle(httpResponse);

    if (responseOrError.isError()) {
      return error(responseOrError.value);
    }

    const response = responseOrError.value.response;

    return success(response);
  }
}

export namespace GetPokemonDetails {
  export type Params = {
    name: string;
  };

  export type Response = unknown;
}
