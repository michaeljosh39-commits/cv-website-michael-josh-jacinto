"use client"

import { Badge } from "@/components/ui/badge"

const highlights = [
  "Python",
  "JavaScript",
  "Laravel",
  "PHP",
  "HTML",
  "CSS",
]

export function OverviewTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Professional Summary</h3>
        <p className="text-muted-foreground leading-relaxed">
          Michael Josh Jacinto builds with intention: solve real problems first, then refine the details.
          As a BSIT student and full stack developer, he enjoys turning ideas into working web products
          by combining backend structure with clean frontend execution. His approach focuses on practical
          development, constant iteration, and shipping projects that keep getting better over time.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Key Skills</h3>
        <div className="flex flex-wrap gap-2">
          {highlights.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
