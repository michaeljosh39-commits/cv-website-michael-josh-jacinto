"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "St. Paul University Philippines",
    year: "2023-present",
    icon: GraduationCap,
  },
]

export function EducationTab() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card key={index} className="border-border/50 bg-card/50">
            <CardContent className="flex items-start gap-4 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <edu.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
              </div>
              <span className="text-sm text-muted-foreground">{edu.year}</span>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  )
}
