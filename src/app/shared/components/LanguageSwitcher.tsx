import { SUPPORTED_LANGUAGES } from '@/main/config/i18n/config'
import { Button } from '@/app/shared/components/ui/button'
import { useTranslation } from '@/app/shared/hooks/useTranslation'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation('common')
  return (
    <>
      {SUPPORTED_LANGUAGES.map((lang) => (
        <Button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          variant={i18n.language === lang ? 'tonal' : 'text'}
          className='uppercase'
        >
          {lang}
        </Button>
      ))}
    </>
  )
}
