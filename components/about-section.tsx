"use client"

import { useEffect, useRef } from "react"
import { Target, Zap, Shield } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Focused on delivering measurable results",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Leveraging cutting-edge AI technology",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "Committed to your long-term success",
  },
]

export function AboutSection() {
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

  return (
    <section id="about" className="py-20 sm:py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="scroll-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                NevaraTech is a team of passionate engineers, designers, and strategists dedicated to building systems that automate, scale, and simplify complex workflows. 
                We specialize in creating custom websites, AI-powered automations, and data systems tailored to your unique business needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Our mission is to design systems that reduce friction, eliminate repetitive work,
                and scale responsibly. We focus on clarity, maintainability, and long-term value,
                building solutions teams can understand, trust, and evolve.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3">
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="scroll-fade-in relative">
              <div className="glass p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-gradient" />
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4 glass p-4 rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">AI-Powered</div>
                      <div className="text-sm text-muted-foreground">Intelligent automation</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 glass p-4 rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Fast Delivery</div>
                      <div className="text-sm text-muted-foreground">Rapid implementation</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 glass p-4 rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Results-Focused</div>
                      <div className="text-sm text-muted-foreground">Measurable outcomes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
