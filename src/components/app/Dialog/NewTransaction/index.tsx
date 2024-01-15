import { FormEvent, useState } from 'react'
import { UpdateIcon } from '@radix-ui/react-icons'

import { api } from '@/utils/api'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { DatePicker } from '@/components/ui/DatePicker'
import { useToast } from '@/components/ui/Toast/useToast'
import { useGetTransactions } from '@/lib/useGetTransactions'
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from '@/components/ui/Dialog'

export function DialogNewTransactions() {
  const { toast } = useToast()
  const { mutate } = useGetTransactions()
  const [loading, setLoading] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState<Date>()
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  async function submitValues(e: FormEvent) {
    e.preventDefault()

    setLoading(true)

    if (
      description.trim().length === 0 ||
      amount === 0 ||
      category.trim().length === 0 ||
      date === undefined
    ) {
      return toast({
        variant: 'destructive',
        title: 'Falha no cadastro da transação',
        description: 'Preencha todos os campos para adicionar uma transação',
      })
    }

    await api
      .post('/transactions', {
        description,
        amount,
        type,
        category,
        date,
        createdAt: new Date(),
      })
      .then(() => {
        toast({
          title: 'Novo transação cadastrada',
          description: `${description} foi adicionado a tabela`,
        })
      })

    mutate()

    setDescription('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    setDate(undefined)

    setOpenDialog(false)

    setLoading(false)
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button size="lg">Nova transação</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova transação</DialogTitle>

          <DialogDescription>
            Insira os dados abaixo para adicionar uma nova transação
          </DialogDescription>
        </DialogHeader>

        <div className="mt-8 flex flex-col gap-2 sm:mb-10 sm:gap-4">
          <Input
            required
            id="description"
            className="h-12"
            label="Descrição"
            value={description}
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="my-2 flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <Input
              min={1}
              required
              id="amount"
              type="number"
              label="Preço"
              value={amount}
              className="h-12"
              placeholder="Preço"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <Input
              required
              id="category"
              className="h-12"
              value={category}
              label="Categoria"
              placeholder="Categoria"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <DatePicker date={date} setDate={setDate} />

          <div className="flex items-center gap-2 overflow-x-auto px-1 py-2 sm:gap-4 sm:py-4">
            <Button
              size="lg"
              className="flex-1"
              onClick={() => setType('deposit')}
              variant={type === 'deposit' ? 'default' : 'secondary'}
            >
              Receita
            </Button>
            <Button
              size="lg"
              data-type={type}
              variant="secondary"
              onClick={() => setType('withdraw')}
              className="flex-1 data-[type=withdraw]:bg-danger-mid data-[type=withdraw]:focus:outline-danger-mid"
            >
              Despesa
            </Button>
          </div>
        </div>

        <DialogFooter>
          <Button
            size="lg"
            type="button"
            className="w-full"
            onClick={submitValues}
          >
            {loading ? <UpdateIcon className="animate-spin" /> : 'Cadastrar'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
