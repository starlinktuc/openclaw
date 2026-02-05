"use client"

import { useState } from "react"
import { Terminal, MessageSquare, Bot, Zap, Copy, Check } from "lucide-react"

function CodeBlock({ children, title }: { children: string; title?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      {title && (
        <div className="text-xs text-muted-foreground mb-1 font-medium">{title}</div>
      )}
      <div className="bg-secondary/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 rounded-md bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
        </button>
        <pre className="whitespace-pre-wrap">{children}</pre>
      </div>
    </div>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Terminal className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">OpenClaw</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#quickstart" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Quick Start
            </a>
            <a
              href="https://github.com/starlinktuc/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            v2026.2.3
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            WhatsApp Gateway CLI with AI Agent
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            A powerful command-line tool for WhatsApp automation using Baileys web. Connect messaging platforms
            including WhatsApp, Telegram, Slack, Discord, Signal, iMessage, and more with your AI assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quickstart"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </a>
            <a
              href="https://github.com/starlinktuc/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={MessageSquare}
              title="Multi-Platform Messaging"
              description="Connect WhatsApp, Telegram, Slack, Discord, Signal, iMessage, Microsoft Teams, Matrix, and more through a unified gateway."
            />
            <FeatureCard
              icon={Bot}
              title="AI Agent Integration"
              description="Built-in Pi RPC agent with configurable thinking levels. Talk to your AI assistant and deliver responses to any connected channel."
            />
            <FeatureCard
              icon={Terminal}
              title="CLI-First Design"
              description="Powerful command-line interface for automation, scripting, and integration with existing workflows and CI/CD pipelines."
            />
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quickstart" className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-12">Quick Start</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">1. Install and Setup</h3>
              <CodeBlock title="Install the daemon">{`openclaw onboard --install-daemon`}</CodeBlock>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">2. Start the Gateway</h3>
              <CodeBlock title="Run the gateway with verbose output">{`openclaw gateway --port 18789 --verbose`}</CodeBlock>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">3. Send Messages</h3>
              <CodeBlock title="Send a message to a phone number">{`openclaw message send --to +1234567890 --message "Hello from OpenClaw"`}</CodeBlock>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">4. Use the AI Agent</h3>
              <CodeBlock title="Talk to the assistant with high thinking">{`openclaw agent --message "Ship checklist" --thinking high`}</CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Channels */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8">Supported Channels</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "WhatsApp",
              "Telegram",
              "Slack",
              "Discord",
              "Google Chat",
              "Signal",
              "iMessage",
              "BlueBubbles",
              "Microsoft Teams",
              "Matrix",
              "Zalo",
              "WebChat",
            ].map((channel) => (
              <span
                key={channel}
                className="bg-background border px-4 py-2 rounded-full text-sm font-medium"
              >
                {channel}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>OpenClaw is a Node.js CLI tool. This web interface is for documentation purposes.</p>
          <p className="mt-2">
            <a
              href="https://github.com/starlinktuc/openclaw"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>{" "}
            &middot; MIT License
          </p>
        </div>
      </footer>
    </div>
  )
}
