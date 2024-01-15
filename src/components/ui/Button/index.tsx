import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const buttonVariants = cva(
  'flex items-center gap-2 justify-center whitespace-nowrap rounded text-sm font-medium transition-colors outline-none focus:outline-2 focus:outline-offset-2 focus:outline-primary-mid disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary-light text-zinc-50 hover:bg-primary-mid focus:bg-primary-dark',
        secondary:
          'bg-zinc-700 text-zinc-50 hover:bg-zinc-600 focus:bg-zinc-500',
        outline:
          'bg-transparent border border-primary-mid hover:bg-primary-mid focus:border-primary-dark focus:bg-primary-dark',
        ghost: 'bg-transparent hover:bg-zinc-600 focus:bg-zinc-500',
        link: 'text-primary-mid underline-offset-4 hover:underline',
      },
      size: {
        lg: 'h-12 px-8',
        default: 'h-10 px-4',
        sm: 'h-8 px-4 text-xs',
        icon: 'h-10 w-10 min-w-10 min-h-10',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
