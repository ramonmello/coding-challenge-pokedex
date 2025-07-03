import { Badge } from '@/app/shared/components/ui'
import { cn } from '@/app/shared/utils'

export type PokeTypesProps = {
  types: string[]
  className?: string
}

export const PokeTypes = ({ types, className }: PokeTypesProps) => {
  return (
    <div className={cn('flex gap-2', className)}>
      {types.map((type) => (
        <Badge variant='default' key={type}>
          {type}
        </Badge>
      ))}
    </div>
  )
}
