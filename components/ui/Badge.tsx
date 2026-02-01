import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'accent1' | 'accent2' | 'accent3'
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const baseStyles = 'neo-badge rounded-full inline-flex items-center justify-center'
    
    const variants = {
      primary: 'bg-primary text-black',
      secondary: 'bg-secondary text-black',
      accent1: 'bg-accent1 text-black',
      accent2: 'bg-accent2 text-white',
      accent3: 'bg-accent3 text-black',
    }

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
