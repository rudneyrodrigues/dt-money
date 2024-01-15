import {
  Model,
  createServer,
  // RestSerializer,
  ActiveModelSerializer,
} from 'miragejs'

import { TransactionProps } from '@/types/transactions'

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
      // application: RestSerializer,
    },

    models: {
      transaction: Model.extend<Partial<TransactionProps>>({}),
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            description: 'Freelance de website',
            type: 'deposit',
            category: 'Dev',
            amount: 6000,
            date: new Date('2021-02-12'),
            createdAt: new Date('2021-02-12 09:00:00'),
          },
          {
            id: 2,
            description: 'Aluguel',
            type: 'withdraw',
            category: 'Casa',
            amount: 1100,
            date: new Date('2021-02-14'),
            createdAt: new Date('2021-02-14 11:00:00'),
          },
        ],
      })
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/transactions', function (schema) {
        return schema.all('transaction')
      })

      this.post('/transactions', function (schema, request) {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)
      })

      this.namespace = ''

      this.passthrough()
    },
  })

  return server
}
