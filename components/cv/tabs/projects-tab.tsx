"use client"

import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "ai-agent-dev-setup-michael-josh-jacinto",
    description:
      "AI Agent Developer environment setup with complete MCP server configuration and documentation.",
    tech: ["JavaScript", "Node.js", "MCP", "Documentation"],
    status: "Completed",
    statusColor: "bg-blue-500/10 text-blue-500",
    url: "https://github.com/michaeljosh39-commits/ai-agent-dev-setup-michael-josh-jacinto",
  },
  {
    title: "git-activity-1",
    description:
      "Git and GitHub practice repository focused on commits, repository workflow, and version control basics.",
    tech: ["HTML", "Git", "GitHub"],
    status: "Completed",
    statusColor: "bg-blue-500/10 text-blue-500",
    url: "https://github.com/michaeljosh39-commits/git-activity-1",
  },
  {
    title: "michaeljosh39-commits",
    description:
      "GitHub profile repository used for personal profile README and account presentation.",
    tech: ["Markdown", "GitHub"],
    status: "Completed",
    statusColor: "bg-blue-500/10 text-blue-500",
    url: "https://github.com/michaeljosh39-commits/michaeljosh39-commits",
  },
]

export function ProjectsTab() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project, index) => (
        <Card 
          key={index} 
          className="border-border/50 bg-card/50 hover:border-primary/50 transition-colors group"
        >
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-base">{project.title}</CardTitle>
              <Badge 
                variant="secondary" 
                className={`text-xs shrink-0 ${project.statusColor}`}
              >
                {project.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="outline" 
                  className="text-xs bg-background"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View Project
                <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
