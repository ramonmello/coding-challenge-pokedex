import { useTranslation } from '@/app/shared/hooks'

export const PokemonNotFound = () => {
  const { t } = useTranslation('common')

  return (
    <div className='flex flex-col items-center p-6'>
      <div className='flex flex-col items-center gap-4 text-center'>
        <div className='text-6xl'>😢</div>
        <h2 className='text-xl font-semibold text-gray-800'>
          {t('notFound.title')}
        </h2>
        <p className='max-w-md text-gray-600'>{t('notFound.message')}</p>
      </div>
    </div>
  )
}
