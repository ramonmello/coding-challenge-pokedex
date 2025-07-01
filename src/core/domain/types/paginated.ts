export type PaginationParams = {
  offset: number
  limit: number
}

export type Paginated<T> = {
  count: number
  next: PaginationParams | null
  previous: PaginationParams | null
  results: T[]
}
