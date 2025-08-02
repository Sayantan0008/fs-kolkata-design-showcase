import { cn } from "@/lib/utils"

export interface TestimonialAuthor {
    name: string
    handle: string
    avatar: string
}

interface TestimonialCardProps {
    author: TestimonialAuthor
    text: string
    href?: string
    className?: string
}

export function TestimonialCard({
    author,
    text,
    href,
    className
}: TestimonialCardProps) {
    const CardContent = () => (
        <div className={cn(
            "flex w-80 min-h-[12rem] flex-col justify-between rounded-lg border bg-card p-6 text-card-foreground shadow-sm shrink-0",
            className
        )}>
            <p className="text-sm leading-relaxed mb-4">{text}</p>
            <div className="flex items-center gap-3 mt-auto">
                <img
                    src={author.avatar}
                    alt={author.name}
                    className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                    <p className="text-sm font-medium">{author.name}</p>
                    <p className="text-xs text-muted-foreground">{author.handle}</p>
                </div>
            </div>
        </div>
    )

    if (href) {
        return (
            <a href={href} className="block transition-transform hover:scale-105">
                <CardContent />
            </a>
        )
    }

    return <CardContent />
}