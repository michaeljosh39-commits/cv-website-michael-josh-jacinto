"use client"

import { Github, Mail } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "GitHub Projects", value: "3" },
  { label: "Core Stack", value: "Python + PHP" },
  { label: "Current Path", value: "BSIT Student" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/michaeljosh39-commits", label: "GitHub" },
  { icon: Mail, href: "mailto:michaeljosh39@gmail.com", label: "Email" },
]

export function ProfileSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="flex flex-col items-center text-center">
        <Avatar className="h-28 w-28 border-4 border-primary/20">
          <AvatarImage src="/jacinto.jpg" alt="Michael Josh Jacinto" />
          <AvatarFallback className="bg-primary/10 text-2xl font-semibold text-primary">
            MJ
          </AvatarFallback>
        </Avatar>
        
        <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl text-balance">
          Michael Josh Jacinto
        </h1>
        <p className="mt-2 text-lg text-primary font-medium">
          BSIT Student, Full stack developer
        </p>
        <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
          I build projects with a learner's mindset and a builder's discipline, turning class concepts
          into working web products people can actually use. As a BSIT student and full stack developer,
          I enjoy connecting backend logic and frontend design to create practical experiences that are
          clear, reliable, and continuously improving with every release.
        </p>

        <div className="mt-6 flex gap-2">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="icon"
              asChild
              className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <link.icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>

        <div className="mt-10 grid w-full max-w-md grid-cols-3 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-border/50 bg-card/50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
