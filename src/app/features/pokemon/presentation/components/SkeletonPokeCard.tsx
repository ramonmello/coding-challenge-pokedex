import { Skeleton } from '@/app/shared/components/ui'

export const SkeletonPokeCard = () => (
  <div className='bg-blue-light rounded-2xl px-4 pt-4 pb-2 shadow-[1px_1px_2px_0_rgba(0,0,0,0.1),_-1px_-1px_2px_0_rgba(0,0,0,0.05)]'>
    <div className='flex justify-between'>
      <div className='flex flex-col gap-2'>
        <Skeleton className='h-7 w-28' />
        <Skeleton className='h-6 w-28' />
        <Skeleton className='h-5 w-28' />
      </div>
      <Skeleton className='size-20' />
    </div>
    <div className='mt-2 flex justify-between gap-2'>
      <Skeleton className='h-5 flex-1' />
      <Skeleton className='h-5 flex-1' />
    </div>
  </div>
)
