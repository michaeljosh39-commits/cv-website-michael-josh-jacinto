"use client"

import { Code2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Code2 className="h-4 w-4" />
            <span>Built with Next.js, Tailwind CSS & shadcn/ui</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Powered by</span>
            <a 
              href="https://v0.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              v0.dev
            </a>
            <span>&</span>
            <a 
              href="https://vercel.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Vercel
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
