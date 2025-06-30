import useTranslation from '@/app/shared/hooks/useTranslation'
import { PokeTypes } from './PokeTypes'
import { Tabs } from './PokeTabs'
import type { PokemonDetails } from '@/app/features/pokemon/domain/models'

export const PokeDetails = ({
  name,
  types,
  stats,
  image,
  abilities,
  height,
  weight
}: PokemonDetails) => {
  const { t } = useTranslation(['common', 'modal'])
  const Status = () => (
    <dl>
      {stats.map((stat) => (
        <div
          key={stat.name}
          className='border-blue-medium mt-1 flex flex-row justify-between border-b first:mt-0'
        >
          <dt className='text-sm font-bold'>{t(`stats.${stat.name}`)}</dt>
          <dd className='text-blue-medium text-sm'>{stat.value}</dd>
        </div>
      ))}
    </dl>
  )

  const Details = () => (
    <dl className='space-y-1 text-sm'>
      <div className='flex'>
        <dt className='mr-2 font-medium text-gray-700'>
          {t('modal:abilities')}
        </dt>
        <dd className='text-blue-medium'>{abilities.join(', ')}</dd>
      </div>

      <div className='flex flex-row gap-4'>
        <div className='flex flex-1'>
          <dt className='mr-2 font-medium text-gray-700'>
            {t('modal:height')}
          </dt>
          <dd className='text-blue-medium'>{height}</dd>
        </div>
        <div className='flex flex-1'>
          <dt className='mr-2 font-medium text-gray-700'>
            {t('modal:weight')}
          </dt>
          <dd className='text-blue-medium'>{weight}</dd>
        </div>
      </div>
    </dl>
  )
  return (
    <div className='h-full'>
      <PokeTypes types={types} />
      <img src={image} alt={name} className='mx-auto mt-4 mb-6 h-52 w-auto' />

      <Tabs statusContent={<Status />} detailsContent={<Details />} />
    </div>
  )
}
