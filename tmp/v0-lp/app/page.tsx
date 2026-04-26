import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { Screenshot } from "@/components/landing/screenshot"
import { HowItWorks } from "@/components/landing/how-it-works"
import { OpenSource } from "@/components/landing/open-source"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Screenshot />
      <HowItWorks />
      <OpenSource />
      <Footer />
    </main>
  )
}
