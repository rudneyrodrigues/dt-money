import Image from 'next/image'

import { DialogNewTransactions } from '../Dialog/NewTransaction'

export function Header() {
  return (
    <header className="h-52 border-b border-b-zinc-900 bg-zinc-950 px-4">
      <div className="mx-auto flex h-20 max-w-screen-lg items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.svg" alt="DT Money" width={40} height={40} />
          <strong>DT Money</strong>
        </div>

        <DialogNewTransactions />
      </div>
    </header>
  )
}
