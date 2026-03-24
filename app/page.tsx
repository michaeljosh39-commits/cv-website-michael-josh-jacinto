import { Header } from "@/components/cv/header"
import { ProfileSection } from "@/components/cv/profile-section"
import { CVTabs } from "@/components/cv/cv-tabs"
import { ContactSection } from "@/components/cv/contact-section"
import { Footer } from "@/components/cv/footer"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-4xl px-4">
        <ProfileSection />
        <CVTabs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
