import { LanguageSwitcher } from '@/app/shared/components'
import { SearchInput } from '../SearchInput'
import { useTranslation } from '@/app/shared/hooks'
import { useIsFetching } from '@tanstack/react-query'

import { Link, Outlet } from '@tanstack/react-router'

export const DefaultLayout = () => {
  const { t } = useTranslation(['common', 'aria-label'])
  const isFetching = useIsFetching()
  return (
    <main className='relative flex h-dvh flex-col'>
      {isFetching > 0 && (
        <span className='bg-blue-dark absolute top-1 left-1/2 h-2 w-20 -translate-x-1/2 animate-pulse rounded-full' />
      )}
      <header className='flex flex-col px-6 pt-4 md:flex-row md:items-center md:justify-between'>
        <div className='flex items-center justify-between md:justify-start md:gap-4'>
          <Link
            to='/'
            className='focus-visible:ring-blue-dark h-11 text-2xl leading-11 font-bold'
            aria-label={t('go-to-home')}
          >
            Pokédex
          </Link>
          <div className='flex h-11 gap-2 md:hidden'>
            <LanguageSwitcher />
          </div>
        </div>
        <SearchInput
          placeholder={t('search-pokemon')}
          className='mt-4 h-11 w-full md:order-none md:mt-0 md:w-80'
        />
        <div className='hidden h-11 md:block'>
          <LanguageSwitcher />
        </div>
      </header>
      <Outlet />
    </main>
  )
}
