import Head from 'next/head'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

import { Header } from '@/components/app/Header'
import { Dashboard } from '@/components/app/Dashboard'
import { Transactions } from '@/components/app/Transactions'

export default function Home() {
  return (
    <>
      <Head>
        <title>DT Money</title>
      </Head>

      <main className="flex min-h-screen w-full flex-col">
        <div className="sticky top-0 flex h-10 items-center overflow-x-auto bg-zinc-900/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60">
          <div className="mx-auto flex animate-pulse items-center gap-2">
            <ExclamationTriangleIcon className="h-5 w-5 text-danger-light" />

            <span className="text-nowrap text-sm text-danger-light">
              Esta aplicação é apenas uma demonstração.
            </span>
          </div>
        </div>

        <Header />

        <section className="flex w-full flex-1 flex-col bg-zinc-900 px-4">
          <div className="mx-auto -mt-24 w-full max-w-screen-lg">
            <Dashboard />

            <Transactions />
          </div>
        </section>
      </main>
    </>
  )
}
