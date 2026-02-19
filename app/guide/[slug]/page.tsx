"use client";

import { useState, useEffect } from "react";

// Theme system
type Theme = "dark" | "light" | "contrast";

function useTheme(): [Theme, (t: Theme) => void] {
  const [theme, setThemeState] = useState<Theme>("dark");
  useEffect(() => {
    const saved = localStorage.getItem("meshuga-theme") as Theme;
    if (saved) setThemeState(saved);
  }, []);
  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("meshuga-theme", t);
  };
  return [theme, setTheme];
}

const themes: Record<Theme, Record<string, string>> = {
  dark: {
    bg: "#0a0a0a", bgCard: "#111113", border: "#1a1a1f",
    text: "#e8e8ed", textMuted: "#6b6b7b", textWhisper: "#4a4a58",
    accent: "#6366f1", accentSoft: "#6366f120",
  },
  light: {
    bg: "#fafafa", bgCard: "#ffffff", border: "#e5e5e5",
    text: "#1a1a1a", textMuted: "#6b6b6b", textWhisper: "#999999",
    accent: "#4f46e5", accentSoft: "#4f46e510",
  },
  contrast: {
    bg: "#000000", bgCard: "#0a0a0a", border: "#333333",
    text: "#ffffff", textMuted: "#cccccc", textWhisper: "#aaaaaa",
    accent: "#818cf8", accentSoft: "#818cf830",
  },
};

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

function ThemeToggle({ theme, setTheme }: { theme: Theme; setTheme: (t: Theme) => void }) {
  const t = themes[theme];
  return (
    <div className="flex gap-1 p-1 rounded-lg" style={{ background: t.bgCard, border: `1px solid ${t.border}` }}>
      {(["dark", "light", "contrast"] as Theme[]).map((opt) => (
        <button
          key={opt}
          onClick={() => setTheme(opt)}
          className="px-3 py-1.5 rounded-md text-xs font-medium transition"
          style={{
            background: theme === opt ? t.accent : "transparent",
            color: theme === opt ? "#fff" : t.textMuted,
          }}
        >
          {opt === "dark" ? "Dark" : opt === "light" ? "Light" : "A11y"}
        </button>
      ))}
    </div>
  );
}

function StepBlock({ step, t, isContrast }: { step: typeof guide.steps[0]; t: Record<string, string>; isContrast: boolean }) {
  const [showFix, setShowFix] = useState(false);
  const baseFontSize = isContrast ? "18px" : "16px";

  return (
    <div className="py-16 md:py-24" style={{ borderBottom: `1px solid ${t.border}` }}>
      <div className="max-w-2xl mx-auto px-6">
        {/* Step number */}
        <div className="mb-8">
          <span
            className="inline-flex items-center justify-center w-12 h-12 rounded-full text-lg font-light"
            style={{ border: `1.5px solid ${t.accent}`, color: t.accent }}
          >
            {step.number}
          </span>
        </div>

        {/* Action headline */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight" style={{ color: t.text, fontSize: isContrast ? "28px" : undefined }}>
          {step.action}
        </h2>

        {/* Body */}
        <p className="leading-relaxed mb-6" style={{ color: t.text, fontSize: baseFontSize, lineHeight: "1.75" }}>
          {step.body}
        </p>

        {/* Screenshot placeholder */}
        <div className="rounded-lg mb-8 flex items-center justify-center" style={{ background: t.bgCard, border: `1px solid ${t.border}`, height: "300px" }}>
          <span className="text-sm" style={{ color: t.textWhisper }}>Annotated screenshot — Step {step.number}</span>
        </div>

        {/* Whisper / Why */}
        <p className="italic leading-relaxed mb-6" style={{ color: t.textWhisper, fontSize: isContrast ? "16px" : "14px", paddingLeft: "1.5rem", borderLeft: `2px solid ${t.border}` }}>
          {step.whisper}
        </p>

        {/* Fix — collapsible */}
        {step.fix && (
          <div>
            <button
              onClick={() => setShowFix(!showFix)}
              className="text-sm font-medium transition"
              style={{ color: t.textMuted }}
            >
              {showFix ? "− Hide troubleshooting" : "+ If something went wrong"}
            </button>
            {showFix && (
              <p className="mt-3 text-sm leading-relaxed pl-4" style={{ color: t.textMuted, borderLeft: `2px solid ${t.accent}40` }}>
                {step.fix}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function GuidePage() {
  const [theme, setTheme] = useTheme();
  const t = themes[theme];
  const isContrast = theme === "contrast";

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ background: t.bg, color: t.text }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ background: `${t.bg}ee`, borderBottom: `1px solid ${t.border}` }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="text-sm font-medium" style={{ color: t.textMuted }}>← All Guides</a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>

      {/* Guide Header */}
      <header className="pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: t.accentSoft, color: t.accent }}>
              Updated for v{guide.version}
            </span>
            <span className="text-xs" style={{ color: t.textWhisper }}>
              Last updated {guide.lastUpdated}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight" style={{ fontSize: isContrast ? "3.5rem" : undefined }}>
            {guide.title}
          </h1>
          <p className="text-xl mb-8" style={{ color: t.textMuted }}>
            {guide.subtitle}
          </p>
          <div className="flex items-center gap-6 text-sm" style={{ color: t.textWhisper }}>
            <span>{guide.readTime} read</span>
            <span>{guide.pages} pages</span>
            <span>{guide.steps.length} steps</span>
          </div>
        </div>
      </header>

      {/* Steps */}
      <main>
        {guide.steps.map((step) => (
          <StepBlock key={step.number} step={step} t={t} isContrast={isContrast} />
        ))}
      </main>

      {/* Buy CTA */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Get the full guide</h2>
          <p className="mb-8" style={{ color: t.textMuted }}>
            {guide.steps.length} steps shown above. The complete guide includes {guide.pages} pages with screenshots, advanced techniques, prompt templates, and AI chat support.
          </p>
          <a
            href={guide.buyUrl}
            className="inline-block px-10 py-4 rounded-lg font-semibold text-lg text-white transition hover:opacity-90"
            style={{ background: t.accent }}
          >
            Get Full Guide — {guide.price}
          </a>
          <p className="text-xs mt-4" style={{ color: t.textWhisper }}>
            One-time purchase. Lifetime updates. Instant download.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs" style={{ color: t.textWhisper, borderTop: `1px solid ${t.border}` }}>
        A Meshuga Guide — Crazy Simple Tech
      </footer>
    </div>
  );
}
