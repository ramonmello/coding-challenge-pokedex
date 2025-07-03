import { Link, useParams } from '@tanstack/react-router'
import { PokeCard } from '../components'
import { ArrowIcon } from '@/app/shared/components/icons'
import { Button } from '@/app/shared/components/ui'
import { useTranslation } from 'react-i18next'

const PokemonSearchScreen = () => {
  const params = useParams({ strict: false })
  const { t } = useTranslation('common')
  return (
    <div className='flex flex-col items-center p-6'>
      <PokeCard className='md:max-w-80' name={params.name} />
      <Button asChild variant='text' className='mt-6 w-fit'>
        <Link to='/' aria-label={t('go-back-to-pokedex')}>
          <ArrowIcon className='size-5' />
          {t('go-back-to-pokedex')}
        </Link>
      </Button>
    </div>
  )
}

export default PokemonSearchScreen
