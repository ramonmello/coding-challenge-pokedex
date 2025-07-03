import { createFileRoute } from '@tanstack/react-router'
import { SkeletonPokeCard } from '@/app/features/pokemon/presentation/components'

export const Route = createFileRoute('/_layout/search/$name')({
  pendingComponent: () => (
    <div className='flex flex-col items-center p-6'>
      <SkeletonPokeCard />
    </div>
  ),
  errorComponent: () => (
    <div className='flex flex-col items-center p-6'>
      <div className='flex flex-col items-center gap-4 text-center'>
        <div className='text-6xl'>😢</div>
        <h2 className='text-xl font-semibold text-gray-800'>
          Pokémon não encontrado
        </h2>
        <p className='max-w-md text-gray-600'>
          Desculpe, não conseguimos encontrar o Pokémon que você está
          procurando. Verifique se o nome está correto e tente novamente.
        </p>
      </div>
    </div>
  )
})
