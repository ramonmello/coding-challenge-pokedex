import { cn } from '@/app/shared/utils/index'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='skeleton'
      className={cn('bg-blue-medium/20 animate-pulse rounded-md', className)}
      {...props}
    />
  )
}

export { Skeleton }
