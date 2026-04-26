import { Button } from "@/components/ui/button"
import { Github, Star, GitFork, Heart } from "lucide-react"

export function OpenSource() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-full bg-secondary">
              <Github className="size-7" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Open Source & Community Driven
            </h2>
            
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              ChatLogVault is free, open source, and built with love by the community. 
              Contributions are always welcome.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="size-5 text-yellow-500" />
                <span className="font-semibold text-foreground">2.4k</span>
                <span>stars</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <GitFork className="size-5" />
                <span className="font-semibold text-foreground">340</span>
                <span>forks</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="size-5 text-red-500" />
                <span className="font-semibold text-foreground">80+</span>
                <span>contributors</span>
              </div>
            </div>

            {/* License badge */}
            <div className="mt-8 rounded-lg bg-secondary/50 px-4 py-2 text-sm">
              <span className="text-muted-foreground">Released under the </span>
              <span className="font-mono font-medium">MIT License</span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Star className="size-4" />
                  Star on GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <GitFork className="size-4" />
                  Fork & Contribute
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
