import { MessageSquare, Search, Tag, Folder } from "lucide-react"

export function Screenshot() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Clean, intuitive interface
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A minimal UI designed to get out of your way.
          </p>
        </div>

        {/* Mock UI Preview */}
        <div className="mt-12 overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-yellow-500/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
            </div>
            <div className="ml-4 flex-1">
              <div className="mx-auto max-w-sm rounded-md bg-secondary px-3 py-1 text-center text-xs text-muted-foreground">
                ChatLogVault
              </div>
            </div>
          </div>

          {/* App content mock */}
          <div className="flex min-h-[400px]">
            {/* Sidebar */}
            <div className="hidden w-56 border-r border-border bg-secondary/30 p-4 sm:block">
              <div className="mb-4 flex items-center gap-2 rounded-md bg-secondary px-3 py-2 text-sm">
                <Search className="size-4 text-muted-foreground" />
                <span className="text-muted-foreground">Search...</span>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 rounded-md bg-primary/10 px-3 py-2 text-sm font-medium">
                  <MessageSquare className="size-4" />
                  All Chats
                </div>
                <div className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary">
                  <Tag className="size-4" />
                  Tags
                </div>
                <div className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary">
                  <Folder className="size-4" />
                  Collections
                </div>
              </div>

              <div className="mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Recent
              </div>
              <div className="mt-2 space-y-1">
                {["React best practices", "API design patterns", "TypeScript tips"].map((title) => (
                  <div key={title} className="truncate rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary">
                    {title}
                  </div>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold">React best practices</h3>
                <div className="flex gap-2">
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    react
                  </span>
                  <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                    tutorial
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg bg-secondary/50 p-4">
                  <p className="text-sm font-medium text-muted-foreground">You</p>
                  <p className="mt-1 text-sm">What are some React best practices for 2024?</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-sm font-medium text-muted-foreground">Assistant</p>
                  <p className="mt-1 text-sm leading-relaxed">
                    Here are key React best practices for 2024: Use Server Components when possible, prefer composition over inheritance, implement proper error boundaries...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
