import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Mr. Sujit Saha",
      handle: "@sujitsaha",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The best thing is - This guy's Behavior, Work, Dedication, Design, Patience and Hard Working make everyone fall for him and his Design. He knows what a client wants, he understands the taste of what client needs! I really appreciate And thank you",
    href: "#"
  },
  {
    author: {
      name: "Pulak Halder",
      handle: "@pulakhalder",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    text: "Our kitchen is designed by F.S. Infrastructure. I would like to specially mention Mr. Farez who was extremely cooperative and professional in the way he designed & handled our project from start to end. Also I should say thanks to Mr. Farez he design and have given his finishing touch to create our dream kitchen. Thank you F.S.Infrastructure!"
  },
  {
    author: {
      name: "Deepshikha Barbhuiya",
      handle: "@deepshikha",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "This team led by Mr Farez is aware what perfection means. They understand what commitment to work, time limit and the client means. Worked on a 3d visualization of a project on Children School with this firm. Extremely satisfied with the delivery of product in such a short time. Kudos Team Farez. Keep it up and All the best!"
  },
  {
    author: {
      name: "Mr. Samaresh Ghosh",
      handle: "@samareshghosh",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Seriously I'm spellbound about this guy and his Designing accuracy. He designed my flat and Recently Designed my Company Office (S S Engineering Services Pvt. Ltd.) In a very high end concept with full space utilization. He's doing a great job with his knowledge and perfection."
  }
]

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="What Clients Say About Us"
      description="Trusted by homeowners, businesses, and professionals for exceptional interior design and architectural solutions"
      testimonials={testimonials}
    />
  )
}

export default TestimonialsSectionDemo;