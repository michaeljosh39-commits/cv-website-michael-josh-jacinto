"use client"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    name: "Programming",
    skills: ["Python", "JavaScript", "PHP"],
  },
  {
    name: "Frameworks & Markup",
    skills: ["Laravel", "HTML", "CSS"],
  },
]

const proficiencySkills = [
  { name: "Python", level: 85 },
  { name: "JavaScript", level: 88 },
  { name: "Laravel", level: 82 },
  { name: "PHP", level: 86 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 87 },
]

export function SkillsTab() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.name}>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="outline"
                  className="bg-card hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Proficiency</h3>
        <div className="space-y-4">
          {proficiencySkills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
