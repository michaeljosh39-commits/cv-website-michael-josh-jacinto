"use client"

import { Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactLinks = [
  { 
    icon: Mail, 
    label: "Email", 
    href: "mailto:michaeljosh39@gmail.com",
    text: "michaeljosh39@gmail.com"
  },
  { 
    icon: Github, 
    label: "GitHub", 
    href: "https://github.com/michaeljosh39-commits",
    text: "github.com/michaeljosh39-commits"
  },
]

export function ContactSection() {
  return (
    <section className="py-12 border-t border-border/50">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">{"Let's Connect"}</h2>
        <p className="mt-2 text-muted-foreground">
          {"Reach out through email or GitHub for collaborations and project discussions."}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          {contactLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              asChild
              className="w-full sm:w-auto hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="mr-2 h-4 w-4" />
                {link.text}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
