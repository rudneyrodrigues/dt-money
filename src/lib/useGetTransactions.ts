import useSWR from 'swr'

import { api } from '@/utils/api'
import { TransactionProps } from '@/types/transactions'

export const useGetTransactions = () => {
  let deposit = 0
  let withdraw = 0

  const fetcher = (url: string) =>
    api.get(url).then((res: { data: TransactionProps }) => res.data)

  const { data, error, mutate } = useSWR<TransactionProps>(
    '/transactions',
    fetcher,
  )

  data?.transactions.map((transaction) => {
    if (transaction.type === 'deposit') {
      deposit += transaction.amount
    } else if (transaction.type === 'withdraw') {
      withdraw += transaction.amount
    }

    return []
  })

  const total = deposit - withdraw

  return {
    data,
    total,
    mutate,
    deposit,
    withdraw,
    isError: error,
    isLoading: !data && !error,
  }
}
