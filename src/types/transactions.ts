export interface TransactionProps {
  transactions: {
    id: string
    date: string
    amount: number
    category: string
    createdAt: string
    description: string
    type: 'deposit' | 'withdraw'
  }[]
}
