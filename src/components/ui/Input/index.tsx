import { forwardRef, InputHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const inputVariants = cva(
  'flex w-full rounded px-4 h-10 text-base text-zinc-50 transitions-colors outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-300 focus:outline-2 focus:outline-offset-2 focus:outline-primary-mid disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-zinc-800 hover:bg-zinc-700 focus:bg-zinc-600',
        ghost: 'bg-transparent hover:bg-zinc-700 focus:bg-zinc-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="mb-2 block text-base text-zinc-300"
          >
            {label}
          </label>
        )}

        <input
          type={type}
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input, inputVariants }
