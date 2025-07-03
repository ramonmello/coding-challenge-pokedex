import {
  Button,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@/app/shared/components/ui'
import { useTranslation } from '@/app/shared/hooks/useTranslation'
import { PokeCardStat } from './PokeCardStat'
import { ChevronDownIcon } from '@/app/shared/components/icons'
import { ResponsiveDialog } from '@/app/shared/components'
import { PokeDetails } from './PokeDetails'
import { PokeTypes } from './PokeTypes'
import { useSuspenseQuery } from '@tanstack/react-query'
import { pokemonDetailsQueryOptions } from '@/app/features/pokemon/queries'
import { cn } from '@/app/shared/utils'
import { useMediaQuery } from '@/app/shared/hooks'

type PokeCardProps = {
  name: string
  className?: string
}

export const PokeCard = ({ name, className }: PokeCardProps) => {
  const { t } = useTranslation(['common', 'card'])
  const { data } = useSuspenseQuery(pokemonDetailsQueryOptions({ name }))
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Collapsible asChild>
      <div
        className={cn(
          'group w-full rounded-2xl',
          'bg-blue-light px-4 pt-4 pb-2 shadow-[1px_1px_2px_0_rgba(0,0,0,0.1),_-1px_-1px_2px_0_rgba(0,0,0,0.05)]',
          className
        )}
      >
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h2 className='text-lg font-bold capitalize'>{data.name}</h2>
            <PokeTypes types={data.types} className='my-1' />
            <CollapsibleContent className='data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden'>
              {data.stats
                .filter((stat) => stat.name !== 'total')
                .map((stat) => (
                  <PokeCardStat
                    className='opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100'
                    key={stat.name}
                    name={t(`stats.${stat.name}`)}
                    value={stat.value}
                  />
                ))}
            </CollapsibleContent>
            <PokeCardStat
              name={t('stats.total')}
              value={
                data.stats.find((stat) => stat.name === 'total')?.value ?? 0
              }
            />
          </div>

          <img
            src={data.image}
            alt={name}
            fetchPriority='high'
            className={cn(
              'h-20 w-auto origin-top-right transform transition-transform duration-300',
              'group-data-[state=open]:scale-150'
            )}
          />
        </div>
        <div className='mt-2 flex justify-between'>
          {isMobile && (
            <CollapsibleTrigger asChild>
              <Button variant='text' className='flex-1/2'>
                <span className='group-data-[state=open]:hidden'>
                  {t('card:expand')}
                </span>
                <span className='hidden group-data-[state=open]:inline'>
                  {t('card:collapse')}
                </span>
                <ChevronDownIcon className='size-5 transition-transform duration-300 group-data-[state=open]:-rotate-180' />
              </Button>
            </CollapsibleTrigger>
          )}
          <ResponsiveDialog
            trigger={
              <Button variant='text' className='flex-1/2'>
                {t('card:viewDetails')}
              </Button>
            }
            title={name}
            description={t('card:viewDetails')}
          >
            <PokeDetails {...data} />
          </ResponsiveDialog>
        </div>
      </div>
    </Collapsible>
  )
}
