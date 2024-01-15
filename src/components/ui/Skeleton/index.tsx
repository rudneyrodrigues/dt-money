import { HTMLAttributes } from 'react'

import { cn } from '@/utils/cn'

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-zinc-800/95', className)}
      {...props}
    />
  )
}

export { Skeleton }
