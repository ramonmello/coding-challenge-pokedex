// import { type GetPokemonList } from "@/app/features/auth/domain/models";
import { RequestResponse } from "@/core/application/http-response/http-response";
import type { HttpClient } from "@/core/application/protocols";
import { HttpMethod } from "@/core/application/protocols";
import { type ServiceCommand } from "@/core/domain/command/service-command";
import { error, success } from "@/core/domain/either/either";

export class GetPokemonList implements ServiceCommand<GetPokemonList.Response> {
  constructor(
    private readonly httpClient: HttpClient<GetPokemonList.Response>,
    private readonly url: string
  ) {}

  async execute(): Promise<ServiceCommand.Response<GetPokemonList.Response>> {
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.GET,
      url: this.url,
    });

    const responseOrError = RequestResponse.handle(httpResponse);

    if (responseOrError.isError()) {
      return error(responseOrError.value);
    }

    const response = responseOrError.value.response;

    return success(response);
  }
}

export namespace GetPokemonList {
  export type Response = {
    count: number;
    results: {
      name: string;
      url: string;
    }[];
  };
}
