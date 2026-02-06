"use client"

import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Sparkles } from "lucide-react"

const projects = [
  {
    title: "JobSeeker AI",
    description: "Intelligent resume builder with AI-powered job matching and application tracking.",
    tag: "AI Tool",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Proposal AI",
    description: "Generate professional business proposals and contracts with smart templates.",
    tag: "Business Tool",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "LeadGen AI",
    description: "Automated contact discovery and intelligent outreach for sales teams.",
    tag: "Sales Tool",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Healthcare Dashboard",
    description: "Real-time patient data visualization and analytics for healthcare providers.",
    tag: "Dashboard",
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "BrimmBot",
    description: "Conversational AI assistant for customer support and engagement.",
    tag: "AI Tool",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "NevaraBot",
    description: "Multi-purpose automation bot for workflow optimization.",
    tag: "AI Tool",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Retro RPG",
    description: "Classic role-playing game with modern AI-driven storytelling.",
    tag: "Game",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    title: "Tic-Tac-Toe AI",
    description: "Unbeatable AI opponent using minimax algorithm.",
    tag: "Game",
    gradient: "from-teal-500 to-cyan-500",
  },
]

export default function InnovationHub() {
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
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Innovation Hub</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-balance">
              Explore Our <span className="gradient-text">Innovation Lab</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed text-pretty">
              Discover our collection of AI-powered tools, interactive dashboards, and experimental projects pushing the
              boundaries of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative" ref={sectionRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="glass group hover:scale-105 transition-all duration-300 relative overflow-hidden border-2 border-transparent hover:border-primary/50 scroll-fade-in"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                {/* Animated Gradient Top Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="secondary" className="glass text-primary">
                      {project.tag}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
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

      <Footer />
    </main>
  )
}
