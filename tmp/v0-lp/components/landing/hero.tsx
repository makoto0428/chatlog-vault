import { Button } from "@/components/ui/button"
import { Github, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald-500" />
            Open Source
          </div>

          {/* Title */}
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            ChatLogVault
          </h1>

          {/* Tagline */}
          <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Your personal vault for ChatGPT conversations. Browse, search, and organize your AI chat history locally with complete privacy.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="size-5" />
                View on GitHub
              </a>
            </Button>
            <Button asChild size="lg" className="gap-2">
              <a href="#get-started">
                Get Started
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          {/* Tech badges */}
          <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="font-mono text-xs">MIT</span> Licensed
            </span>
            <span className="size-1 rounded-full bg-border" />
            <span>TypeScript</span>
            <span className="size-1 rounded-full bg-border" />
            <span>React</span>
          </div>
        </div>
      </div>
    </section>
  )
}
