import * as React from "react"
import { ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: 'default' | 'outline' | 'gold'
    size?: 'sm' | 'default' | 'lg'
    icon?: React.ReactNode
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
    ({ className, variant = 'default', size = 'default', children, icon, ...props }, ref) => {
        const baseClasses = "group relative cursor-pointer border rounded-full overflow-hidden text-center font-elegant font-semibold transition-all duration-300"

        const variantClasses = {
            default: "bg-white text-black hover:text-white",
            outline: "bg-transparent border-white/20 text-foreground hover:text-white",
            gold: "bg-gradient-to-r from-gold to-gold-light text-black hover:text-white"
        }

        const sizeClasses = {
            sm: "p-2 w-28 text-sm",
            default: "p-2 w-32",
            lg: "p-3 w-36 text-lg"
        }

        const backgroundClasses = {
            default: "group-hover:bg-[#263381]",
            outline: "group-hover:bg-foreground",
            gold: "group-hover:bg-gold-dark"
        }

        return (
            <button
                className={cn(
                    baseClasses,
                    variantClasses[variant],
                    sizeClasses[size],
                    className
                )}
                ref={ref}
                {...props}
            >
                <span className='translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
                    {children}
                </span>
                <div className='flex gap-2 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300'>
                    <span>{children}</span>
                    {icon || <ArrowRight className="w-4 h-4" />}
                </div>
                <div className={cn(
                    'absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg scale-[1] group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%]',
                    backgroundClasses[variant]
                )}></div>
            </button>
        )
    }
)

AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }