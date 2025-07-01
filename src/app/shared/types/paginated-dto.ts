export type PaginatedDTO<T> = {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}
