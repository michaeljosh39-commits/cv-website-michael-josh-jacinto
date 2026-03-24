"use client"

import { User, Code, GraduationCap, FolderKanban } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewTab } from "./tabs/overview-tab"
import { SkillsTab } from "./tabs/skills-tab"
import { EducationTab } from "./tabs/education-tab"
import { ProjectsTab } from "./tabs/projects-tab"

const tabs = [
  { value: "overview", label: "Overview", icon: User },
  { value: "skills", label: "Skills", icon: Code },
  { value: "education", label: "Education", icon: GraduationCap },
  { value: "projects", label: "Projects", icon: FolderKanban },
]

export function CVTabs() {
  return (
    <section className="py-8">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6 flex h-auto w-full flex-wrap justify-start gap-1 bg-transparent p-0">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2 text-sm transition-all"
            >
              <tab.icon className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="min-h-[400px] rounded-lg border border-border/50 bg-card/30 p-6">
          <TabsContent value="overview" className="mt-0">
            <OverviewTab />
          </TabsContent>
          <TabsContent value="skills" className="mt-0">
            <SkillsTab />
          </TabsContent>
          <TabsContent value="education" className="mt-0">
            <EducationTab />
          </TabsContent>
          <TabsContent value="projects" className="mt-0">
            <ProjectsTab />
          </TabsContent>
        </div>
      </Tabs>
    </section>
  )
}
