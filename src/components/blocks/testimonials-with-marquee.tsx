import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
    title: string
    description: string
    testimonials: Array<{
        author: TestimonialAuthor
        text: string
        href?: string
    }>
    className?: string
}

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}: TestimonialsSectionProps) {
    return (
        <section className={cn(
            "bg-background text-foreground",
            "py-12 sm:py-24 md:py-32 px-0",
            className
        )}>
            <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
                    <h2 className="max-w-[720px] text-4xl sm:text-6xl font-main-heading text-gold leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg max-w-[600px] font-paragraph text-muted-foreground sm:text-xl">
                        {description}
                    </p>
                </div>

                <div className="relative flex w-full max-w-6xl flex-col items-center justify-center overflow-hidden">
                    <div className="group flex overflow-hidden py-4">
                        <div className="flex gap-8 animate-marquee-infinite group-hover:[animation-play-state:paused]">
                            {/* First set of testimonials */}
                            {testimonials.map((testimonial, i) => (
                                <TestimonialCard
                                    key={`first-${i}`}
                                    {...testimonial}
                                />
                            ))}
                            {/* Second set for seamless loop */}
                            {testimonials.map((testimonial, i) => (
                                <TestimonialCard
                                    key={`second-${i}`}
                                    {...testimonial}
                                />
                            ))}
                            {/* Third set for seamless loop */}
                            {testimonials.map((testimonial, i) => (
                                <TestimonialCard
                                    key={`third-${i}`}
                                    {...testimonial}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background" />
                </div>
            </div>
        </section>
    )
}