import { useState } from 'react'

import { Input } from '@/components/ui/Input'
import { SelectParams } from '../Select/Params'
import { Skeleton } from '@/components/ui/Skeleton'
import { TransactionProps } from '@/types/transactions'
import { useGetTransactions } from '@/lib/useGetTransactions'
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
  TableCaption,
} from '@/components/ui/Table'

const params = [
  {
    value: 'description',
    title: 'Descrição',
  },
  {
    value: 'amount',
    title: 'Preço',
  },
  {
    value: 'category',
    title: 'Categoria',
  },
]

export function Transactions() {
  const [searchValue, setSearchValue] = useState<string>('')
  const [filterParam, setFilterParam] = useState<string[]>([
    'description' || 'amount' || 'category',
  ])

  const { data, isError, isLoading } = useGetTransactions()

  function search(data: TransactionProps | undefined) {
    return data?.transactions.filter((transaction) => {
      if (filterParam.includes('description')) {
        return transaction.description
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      }

      if (filterParam.includes('amount')) {
        return transaction.amount
          .toString()
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      }

      if (filterParam.includes('category')) {
        return transaction.category
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      }

      if (filterParam.includes('date')) {
        return transaction.date
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      }

      return transaction
    })
  }

  return (
    <div className="mt-10 pb-10">
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
        <Input
          min={0}
          value={searchValue}
          className="flex-1 sm:h-12"
          placeholder="Busque uma transação"
          onChange={(e) => setSearchValue(e.target.value)}
          type={filterParam.includes('amount') ? 'number' : 'text'}
        />

        <div className="w-full sm:w-60">
          <SelectParams params={params} setFilterParam={setFilterParam} />
        </div>
      </div>

      <div className="mt-8">
        <Table>
          <TableCaption>
            {data?.transactions.length} transações realizadas
          </TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Descrição</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Data</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isError ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  Erro ao carregar dados
                </TableCell>
              </TableRow>
            ) : isLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell colSpan={4} className="text-center">
                    <Skeleton className="h-6" />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              search(data)?.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell
                    data-type={transaction.type}
                    className="data-[type=deposit]:text-primary-light data-[type=withdraw]:text-danger-light"
                  >
                    {transaction.amount.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell>
                    {new Date(transaction.date).toLocaleDateString('pt-br', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
