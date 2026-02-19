"use client";

import { useState } from "react";
import ThemeToggle from "../../components/ThemeToggle";

// Guide data (will be from CMS/markdown later)
const guide = {
  title: "Cursor AI",
  subtitle: "The Complete Cliff Notes",
  version: "0.45",
  lastUpdated: "February 18, 2026",
  readTime: "30 min",
  pages: 28,
  price: "$29",
  buyUrl: "https://ohamm.gumroad.com",
  steps: [
    {
      number: 1,
      action: "Install Cursor in 60 seconds",
      body: "Download from cursor.com. It replaces VS Code — all your extensions and settings transfer automatically. No configuration needed.",
      whisper: "Cursor is built on VS Code, so everything you know still works. Think of it as VS Code with an AI brain.",
      fix: "If the download stalls, try a different browser. Chrome works best. On Mac, drag to Applications folder and right-click → Open to bypass Gatekeeper.",
    },
    {
      number: 2,
      action: "Open your first AI chat",
      body: "Press Cmd+L (Mac) or Ctrl+L (Windows). A chat panel opens on the right. Type any question about your code. Cursor reads your entire project for context.",
      whisper: "This is the core feature. Unlike ChatGPT, Cursor sees your actual codebase — file structure, dependencies, everything. Its answers are specific to YOUR project.",
      fix: "If the chat panel doesn't appear, check that you're in a workspace (not just a single file). Open a folder first: File → Open Folder.",
    },
    {
      number: 3,
      action: "Generate code with Cmd+K",
      body: "Select any code (or place your cursor on an empty line). Press Cmd+K. Describe what you want in plain English. Cursor writes it.",
      whisper: "Be specific. 'Add a function that validates email addresses and returns true/false' works better than 'validate emails.' The more context, the better the output.",
      fix: "Generated code not what you expected? Press Cmd+Z to undo, then try rephrasing. Add constraints: 'using regex' or 'without external libraries.'",
    },
    {
      number: 4,
      action: "Edit existing code with AI",
      body: "Select a block of code. Press Cmd+K. Say 'refactor this to use async/await' or 'add error handling.' Cursor rewrites it in place.",
      whisper: "This is where Cursor saves hours. Instead of manually refactoring, describe the change. It understands patterns, frameworks, and best practices.",
      fix: "If Cursor changes too much, select a smaller block. The tighter your selection, the more focused the edit.",
    },
    {
      number: 5,
      action: "Use Tab to accept AI suggestions",
      body: "As you type, Cursor predicts your next lines. Ghost text appears — press Tab to accept. It learns your patterns and gets better over time.",
      whisper: "This is autocomplete on steroids. It doesn't just complete variable names — it completes entire functions based on your comments and surrounding code.",
      fix: "Suggestions too aggressive? Go to Settings → Cursor → toggle 'Auto-trigger inline suggestions' to control when predictions appear.",
    },
  ],
};

function StepBlock({ step }: { step: (typeof guide.steps)[0] }) {
  const [showFix, setShowFix] = useState(false);

  return (
    <div className="py-16 md:py-24" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-2xl mx-auto px-6">
        {/* Step number */}
        <div className="mb-8">
          <span
            className="inline-flex items-center justify-center w-12 h-12 rounded-full text-lg font-light"
            style={{ border: "1.5px solid var(--accent)", color: "var(--accent)" }}
          >
            {step.number}
          </span>
        </div>

        {/* Action headline */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
          {step.action}
        </h2>

        {/* Body */}
        <p className="leading-relaxed mb-6" style={{ lineHeight: "1.75" }}>
          {step.body}
        </p>

        {/* Screenshot placeholder */}
        <div
          className="rounded-lg mb-8 flex items-center justify-center"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)", height: "300px" }}
        >
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            Annotated screenshot — Step {step.number}
          </span>
        </div>

        {/* Whisper / Why */}
        <p
          className="italic leading-relaxed mb-6 text-sm"
          style={{ color: "var(--text-muted)", paddingLeft: "1.5rem", borderLeft: "2px solid var(--border)" }}
        >
          {step.whisper}
        </p>

        {/* Fix — collapsible */}
        {step.fix && (
          <details className="group">
            <summary
              className="text-sm font-medium cursor-pointer transition list-none"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="group-open:hidden">+ If something went wrong</span>
              <span className="hidden group-open:inline">− Hide troubleshooting</span>
            </summary>
            <p
              className="mt-3 text-sm leading-relaxed pl-4"
              style={{ color: "var(--text-muted)", borderLeft: "2px solid color-mix(in srgb, var(--accent) 40%, transparent)" }}
            >
              {step.fix}
            </p>
          </details>
        )}
      </div>
    </div>
  );
}

export default function GuidePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Nav */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{ background: "color-mix(in srgb, var(--bg) 85%, transparent)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-2xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
            ← All Guides
          </a>
          <ThemeToggle />
        </div>
      </nav>

      {/* Guide Header */}
      <header className="pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "color-mix(in srgb, var(--accent) 15%, transparent)", color: "var(--accent)" }}
            >
              Updated for v{guide.version}
            </span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              Last updated {guide.lastUpdated}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
            {guide.title}
          </h1>
          <p className="text-xl mb-8" style={{ color: "var(--text-muted)" }}>
            {guide.subtitle}
          </p>
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <span>{guide.readTime} read</span>
            <span>{guide.pages} pages</span>
            <span>{guide.steps.length} steps</span>
          </div>
        </div>
      </header>

      {/* Steps */}
      <main>
        {guide.steps.map((step) => (
          <StepBlock key={step.number} step={step} />
        ))}
      </main>

      {/* Buy CTA */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Get the full guide</h2>
          <p className="mb-8" style={{ color: "var(--text-muted)" }}>
            {guide.steps.length} steps shown above. The complete guide includes {guide.pages} pages
            with screenshots, advanced techniques, prompt templates, and AI chat support.
          </p>
          <a
            href={guide.buyUrl}
            className="inline-block px-10 py-4 rounded-lg font-semibold text-lg text-white transition hover:opacity-90"
            style={{ background: "var(--accent)" }}
          >
            Get Full Guide — {guide.price}
          </a>
          <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
            One-time purchase. Lifetime updates. Instant download.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 text-center text-xs"
        style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}
      >
        A Meshuga Guide — Crazy Simple Tech
      </footer>
    </div>
  );
}
