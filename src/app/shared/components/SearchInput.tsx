import { useCallback, useState } from 'react'
import { SearchIcon, SendIcon, XIcon } from '@/app/shared/components/icons'
import { Button } from '@/app/shared/components/ui/button'
import { cn } from '@/app/shared/utils'
import { useNavigate } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

type SearchInputProps = React.ComponentProps<'input'>

export function SearchInput({ className, ...props }: SearchInputProps) {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()
  const { t } = useTranslation('a11y')

  const handleClear = useCallback(() => {
    setSearchValue('')
  }, [])

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!searchValue.trim()) return

      navigate({
        to: '/search/$name',
        params: { name: searchValue.trim() }
      })
    },
    [navigate, searchValue]
  )

  return (
    <form
      onSubmit={handleSubmit}
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
        id='search-input'
        name='search-input'
        className='text-blue-dark placeholder:text-blue-medium w-full text-sm placeholder:text-sm focus:outline-none'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        {...props}
      />

      {searchValue && (
        <Button
          name='clear'
          variant='text'
          size='icon'
          onClick={handleClear}
          type='button'
          aria-label={t('clear-search')}
        >
          <XIcon className='text-blue-medium size-5' />
        </Button>
      )}
      <Button
        name='search'
        variant='text'
        size='icon'
        className='mr-2'
        type='submit'
        disabled={!searchValue.trim()}
        aria-label={t('search')}
      >
        <SendIcon className='text-blue-medium size-5' />
      </Button>
    </form>
  )
}
