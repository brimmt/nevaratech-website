/* "use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Chris Anderson",
    role: "CEO, TBDG",
    content:
      "NevaraTech automated our client onboarding process — we saved hours weekly and improved our customer experience significantly.",
    initials: "CA",
  },
  {
    name: "Dr. Tommy Chen",
    role: "Founder, GovSpeak",
    content:
      "Their AI dashboard revolutionized our data workflows. The insights we gain now are invaluable for decision-making.",
    initials: "TC",
  },
  {
    name: "Sarah Mitchell",
    role: "CTO, TechFlow",
    content:
      "Working with NevaraTech was a game-changer. Their custom solutions perfectly aligned with our business needs.",
    initials: "SM",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".scroll-fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 sm:py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Trusted by innovative companies worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto scroll-fade-in">
          <Card className="glass border-border/50 relative overflow-hidden">
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            <CardContent className="p-8 sm:p-12 relative">
              <div className="mb-8">
                <p className="text-xl sm:text-2xl text-foreground leading-relaxed text-pretty">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14 border-2 border-primary/50">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold">
                    {testimonials[currentIndex].initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-lg text-foreground">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="glass hover:bg-primary/10 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="glass hover:bg-primary/10 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

*/
