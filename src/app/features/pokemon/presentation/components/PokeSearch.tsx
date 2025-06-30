import * as React from 'react'
import { SearchIcon, SendIcon } from '@/app/shared/components/icons'
import { Button } from '@/app/shared/components/ui/button'
import { cn } from '@/app/shared/utils'
import { useTranslation } from 'react-i18next'

export function PokeSearch({
  className,
  ...props
}: React.ComponentProps<'input'>) {
  const { t } = useTranslation(['common'])
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
        {...props}
      />

      <Button
        variant='text'
        size='icon'
        className='mr-2'
        onClick={() => {
          console.log('clicked')
        }}
      >
        <SendIcon className='text-blue-medium size-5' />
      </Button>
    </div>
  )
}
