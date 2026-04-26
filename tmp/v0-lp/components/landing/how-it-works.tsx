import { Upload, FolderOpen, Zap } from "lucide-react"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Import",
    description: "Export your conversations from ChatGPT and import the JSON file directly into ChatLogVault.",
  },
  {
    icon: FolderOpen,
    step: "02",
    title: "Organize",
    description: "Tag your conversations, create collections, and organize them in a way that makes sense to you.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Search",
    description: "Instantly find any conversation with powerful full-text search across all your chat history.",
  },
]

export function HowItWorks() {
  return (
    <section id="get-started" className="border-t border-border bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get started in minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three simple steps to take control of your ChatGPT history.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-border to-transparent sm:block" />
              )}
              
              <div className="relative mx-auto mb-6 inline-flex size-16 items-center justify-center rounded-full border border-border bg-card">
                <item.icon className="size-7 text-foreground" />
                <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                  {item.step}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
