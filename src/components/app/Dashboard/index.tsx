import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollarSimple,
} from '@phosphor-icons/react'

import { Skeleton } from '@/components/ui/Skeleton'
import { useGetTransactions } from '@/lib/useGetTransactions'

export function Dashboard() {
  const { total, withdraw, deposit, isError, isLoading } = useGetTransactions()

  if (isError) {
    return (
      <div className="flex w-full flex-nowrap gap-4 overflow-x-auto py-4">
        <Skeleton className="flex h-[150px] w-full min-w-60 items-center justify-center border border-danger-mid bg-danger-mid/10">
          <strong className="text-nowrap">Erro ao carregar os dados</strong>
        </Skeleton>
        <Skeleton className="flex h-[150px] w-full min-w-60 items-center justify-center border border-danger-mid bg-danger-mid/10">
          <strong className="text-nowrap">Erro ao carregar os dados</strong>
        </Skeleton>
        <Skeleton className="flex h-[150px] w-full min-w-60 items-center justify-center border border-danger-mid bg-danger-mid/10">
          <strong className="text-nowrap">Erro ao carregar os dados</strong>
        </Skeleton>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex w-full flex-nowrap gap-4 overflow-x-auto py-4">
        <Skeleton className="h-[150px] w-full min-w-60 border border-zinc-700" />

        <Skeleton className="h-[150px] w-full min-w-60 border border-zinc-700" />

        <Skeleton className="h-[150px] w-full min-w-60 border border-zinc-700" />
      </div>
    )
  }

  return (
    <div className="flex w-full flex-nowrap gap-4 overflow-x-auto py-4">
      <div className="w-full min-w-60 rounded border border-zinc-700 bg-zinc-800 p-8">
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="text-base text-zinc-300">Entradas</span>

          <ArrowCircleUp size={32} className="text-primary-light" />
        </div>

        <strong className="text-xl text-zinc-50 md:text-2xl lg:text-3xl">
          {deposit.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>
      </div>

      <div className="w-full min-w-60 rounded border border-zinc-700 bg-zinc-800 p-8">
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="text-base text-zinc-300">Saídas</span>

          <ArrowCircleDown size={32} className="text-danger-light" />
        </div>

        <strong className="text-xl text-zinc-50 md:text-2xl lg:text-3xl">
          {withdraw.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>
      </div>

      <div className="w-full min-w-60 rounded border border-primary-mid bg-primary-light p-8">
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="text-base text-zinc-100">Total</span>

          <CurrencyDollarSimple size={32} className="text-zinc-50" />
        </div>

        <strong className="text-xl text-zinc-50 md:text-2xl lg:text-3xl">
          {total.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>
      </div>
    </div>
  )
}
