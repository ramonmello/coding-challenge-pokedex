import { SkeletonPokeCard } from './SkeletonPokeCard'

export const SkeletonPokeList = () => {
  return (
    <div className='flex flex-col gap-4'>
      {Array.from({ length: 3 }, (_, index) => (
        <SkeletonPokeCard key={index} />
      ))}
    </div>
  )
}
