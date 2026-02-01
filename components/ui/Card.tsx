import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent1' | 'accent2' | 'accent3'
  tilted?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', tilted = false, children, ...props }, ref) => {
    const baseStyles = 'neo-card rounded-2xl p-6'
    
    const variants = {
      default: 'bg-white',
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      accent1: 'bg-accent1',
      accent2: 'bg-accent2',
      accent3: 'bg-accent3',
    }

    const tiltClass = tilted ? (Math.random() > 0.5 ? 'rotate-tilt-left' : 'rotate-tilt-right') : ''

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], tiltClass, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
