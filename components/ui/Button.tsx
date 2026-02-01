import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef, ReactNode, ReactElement, cloneElement } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent1' | 'accent2' | 'accent3'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseStyles = 'neo-button rounded-full font-bold uppercase tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center'
    
    const variants = {
      primary: 'bg-primary text-black hover:bg-primary/90',
      secondary: 'bg-secondary text-black hover:bg-secondary/90',
      accent1: 'bg-accent1 text-black hover:bg-accent1/90',
      accent2: 'bg-accent2 text-white hover:bg-accent2/90',
      accent3: 'bg-accent3 text-black hover:bg-accent3/90',
    }

    const sizes = {
      sm: 'px-6 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-10 py-4 text-lg',
    }

    const classNames = cn(baseStyles, variants[variant], sizes[size], className)

    if (asChild && children) {
      const child = children as ReactElement<any>
      return cloneElement(child, {
        className: cn(classNames, child.props.className),
      })
    }

    return (
      <button
        ref={ref}
        className={classNames}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
