import { useEffect, useState } from 'react'
import { SearchIcon, SendIcon, XIcon } from '@/app/shared/components/icons'
import { Button } from '@/app/shared/components/ui/button'
import { cn } from '@/app/shared/utils'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { pokemonDetailsQueryOptions } from '@/app/features/pokemon/queries'
import type { PokemonDetails } from '../../domain/models'

type PokeSearchProps = React.ComponentProps<'input'> & {
  onSearch: (pokemon: PokemonDetails) => void
  onClear: () => void
}

export function PokeSearch({
  className,
  onSearch,
  onClear,
  ...props
}: PokeSearchProps) {
  const { t } = useTranslation(['common'])
  const [searchValue, setSearchValue] = useState('')
  const [queryPokemon, setQueryPokemon] = useState('')

  const { data } = useQuery({
    ...pokemonDetailsQueryOptions({ name: queryPokemon }),
    enabled: !!queryPokemon
  })

  useEffect(() => {
    if (data) {
      onSearch(data)
    }
  }, [data, onSearch])

  const handleSearch = () => {
    if (searchValue.trim()) {
      setQueryPokemon(searchValue.trim().toLowerCase())
    }
  }

  const handleClear = () => {
    setSearchValue('')
    setQueryPokemon('')
    onClear()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div
      className={cn(
        'outline-blue-medium bg-blue-light focus-within:outline-blue-dark/70 flex h-11 rounded-lg outline-1 -outline-offset-1 focus-within:outline-2',
        className
      )}
    >
      <SearchIcon
        aria-hidden='true'
        className='text-blue-medium pointer-events-none mr-4 ml-2 size-6 shrink-0 self-center'
      />
      <input
        id='search-pokemon'
        name='search-pokemon'
        placeholder={t('search-pokemon')}
        className='text-blue-dark placeholder:text-blue-medium w-full text-sm placeholder:text-sm focus:outline-none'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
        {...props}
      />

      {searchValue && (
        <Button
          name='clear-search'
          variant='text'
          size='icon'
          onClick={handleClear}
        >
          <XIcon className='text-blue-medium size-5' />
        </Button>
      )}
      <Button
        name='search-pokemon'
        variant='text'
        size='icon'
        className='mr-2'
        onClick={handleSearch}
      >
        <SendIcon className='text-blue-medium size-5' />
      </Button>
    </div>
  )
}
