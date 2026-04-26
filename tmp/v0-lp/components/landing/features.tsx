import { HardDrive, Shield, FileJson, Tags, Search, Image } from "lucide-react"

const features = [
  {
    icon: HardDrive,
    title: "Local-First",
    description: "All your data stays on your machine. No cloud sync, no external servers. You own your conversations.",
  },
  {
    icon: Shield,
    title: "Privacy-Friendly",
    description: "Zero telemetry, no tracking. Your chat history remains completely private and secure.",
  },
  {
    icon: FileJson,
    title: "JSON Import/Export",
    description: "Import your ChatGPT export directly. Export your organized data anytime in standard JSON format.",
  },
  {
    icon: Tags,
    title: "Tagging & Organization",
    description: "Create custom tags, folders, and categories. Keep your conversations organized your way.",
  },
  {
    icon: Search,
    title: "Fast Search",
    description: "Instant full-text search across all your conversations. Find any message in milliseconds.",
  },
  {
    icon: Image,
    title: "Image Preview",
    description: "View images and attachments from your conversations inline. No need to download separately.",
  },
]

export function Features() {
  return (
    <section className="border-t border-border bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for developers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to manage your ChatGPT conversations efficiently.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20"
            >
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-secondary">
                <feature.icon className="size-5 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
