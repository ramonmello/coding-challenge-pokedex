import { RequestResponse } from '@/core/application/http-response/http-response'
import type { HttpClient } from '@/core/application/protocols'
import { HttpMethod } from '@/core/application/protocols'
import { type ServiceCommand } from '@/core/domain/command/service-command'
import { error, success } from '@/core/domain/either/either'
import type { PokemonListItem } from '@/app/features/pokemon/domain/models'
import type {
  Paginated,
  PaginatedDTO,
  PaginationParams
} from '@/app/shared/types'
import {
  pokemonListMapper,
  type PokemonListItemDTO
} from '@/app/features/pokemon/application/dtos'

export class GetPokemonList
  implements ServiceCommand<GetPokemonList.Response, GetPokemonList.Params>
{
  constructor(
    private readonly httpClient: HttpClient<PaginatedDTO<PokemonListItemDTO>>,
    private readonly url: string
  ) {}

  async execute(
    params: GetPokemonList.Params
  ): Promise<ServiceCommand.Response<GetPokemonList.Response>> {
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.GET,
      url: `${this.url}?offset=${params.offset}&limit=${params.limit}`
    })

    const responseOrError = RequestResponse.handle(httpResponse)

    if (responseOrError.isError()) {
      return error(responseOrError.value)
    }

    const response = responseOrError.value.response

    return success(pokemonListMapper.dtoToModel(response))
  }
}

export namespace GetPokemonList {
  export type Params = PaginationParams
  export type Response = Paginated<PokemonListItem>
}
