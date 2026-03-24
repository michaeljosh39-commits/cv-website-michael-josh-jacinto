"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description:
      "Leading the development of a next-generation SaaS platform serving 100k+ users. Architected microservices infrastructure and implemented real-time collaboration features.",
    achievements: [
      "Reduced page load time by 60% through optimization",
      "Led a team of 5 developers across 3 time zones",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2019 - 2022",
    description:
      "Built and maintained multiple client-facing applications from concept to production. Collaborated closely with design and product teams to deliver exceptional user experiences.",
    achievements: [
      "Developed a real-time analytics dashboard used by 50+ enterprise clients",
      "Mentored 3 junior developers",
      "Introduced TypeScript, improving code quality by 40%",
    ],
    tech: ["React", "Node.js", "MongoDB", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2017 - 2019",
    description:
      "Crafted responsive, accessible websites for various clients across industries. Specialized in creating pixel-perfect implementations of design mockups.",
    achievements: [
      "Delivered 20+ client projects on time and within budget",
      "Achieved 95+ Lighthouse scores across all projects",
      "Established component library used across the agency",
    ],
    tech: ["React", "Vue.js", "SCSS", "Webpack"],
  },
]

export function ExperienceTab() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="border-border/50 bg-card/50">
          <CardHeader className="pb-2">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold">{exp.role}</h3>
                <p className="text-sm text-primary">{exp.company}</p>
              </div>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
            <ul className="space-y-1 text-sm">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-2">
              {exp.tech.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="text-xs bg-secondary/50"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
