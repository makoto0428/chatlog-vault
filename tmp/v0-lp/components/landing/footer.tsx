import { Github, BookOpen, MessageSquare } from "lucide-react"

const links = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    label: "Documentation",
    href: "#",
    icon: BookOpen,
  },
  {
    label: "Discussions",
    href: "#",
    icon: MessageSquare,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-foreground">
              <span className="font-mono text-sm font-bold text-background">CV</span>
            </div>
            <span className="font-semibold">ChatLogVault</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <link.icon className="size-4" />
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            Built with{" "}
            <span className="text-red-500">♥</span>
            {" "}by the community. MIT Licensed.
          </p>
        </div>
      </div>
    </footer>
  )
}
