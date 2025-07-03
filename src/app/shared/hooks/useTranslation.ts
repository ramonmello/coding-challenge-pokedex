import { useTranslation as useI18NextTranslation } from 'react-i18next'
import type {
  UseTranslationResponse,
  UseTranslationOptions,
  FallbackNs
} from 'react-i18next'
import type { FlatNamespace, KeyPrefix } from 'i18next'

export function useTranslation<
  Ns extends FlatNamespace | readonly FlatNamespace[] | undefined = undefined,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined
>(
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  return useI18NextTranslation(ns, options)
}

export default useTranslation
