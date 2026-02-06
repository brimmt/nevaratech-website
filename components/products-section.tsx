"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Briefcase, Users, ExternalLink } from "lucide-react"

const products = [
  {
    icon: Briefcase,
    title: "JobSeeker AI",
    description: "Smart resume builder and job assistant powered by AI to help you land your dream job.",
    tag: "Career Tool",
  },
  {
    icon: FileText,
    title: "Proposal AI",
    description: "Generate professional proposals and contracts in minutes with intelligent templates.",
    tag: "Business Tool",
  },
  {
    icon: Users,
    title: "LeadGen AI",
    description: "AI-driven contact discovery and outreach automation for sales teams.",
    tag: "Sales Tool",
  },
]

export function ProductsSection() {
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

    const cards = sectionRef.current?.querySelectorAll(".scroll-fade-in")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" className="py-20 sm:py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Flagship <span className="gradient-text">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Innovative AI-powered tools designed to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="glass group hover:scale-105 transition-all duration-300 relative overflow-hidden border-2 border-transparent hover:border-primary/50 scroll-fade-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <product.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full glass text-primary">{product.tag}</span>
                </div>
                <CardTitle className="text-2xl text-card-foreground">{product.title}</CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </CardDescription>
                <Button
                  variant="outline"
                  className="w-full glass hover:bg-primary/10 group/btn text-foreground bg-transparent"
                >
                  View Demo
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
