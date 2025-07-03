import { createFileRoute } from '@tanstack/react-router'
import { DefaultLayout } from '@/app/shared/components/layouts'

export const Route = createFileRoute('/_layout')({
  component: DefaultLayout
})
