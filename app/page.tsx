import { getSiteConfig, getAllSites } from "@/lib/site-config";
import HeroSection from "./components/HeroSection";
import GuideCard from "./components/GuideCard";
import ValueProps from "./components/ValueProps";
import PremiumCTA from "./components/PremiumCTA";
import NewsletterCTA from "./components/NewsletterCTA";
import BrandedFooter from "./components/BrandedFooter";
import ChatWidget from "./components/ChatWidget";
import ThemeToggle from "./components/ThemeToggle";

// Featured guide (Cursor AI — first product)
const featuredGuide = {
  title: "Cursor AI",
  subtitle: "The Complete Cliff Notes",
  description:
    "Go from confused to confident with AI-powered coding in under 30 minutes. No jargon. No fluff. Just the stuff that matters.",
  price: "$29",
  badge: "Trending Now",
  badgeColor: "#ef4444",
  buyUrl: "https://ohamm.gumroad.com/l/cursor-ai",
  status: "available" as const,
};

const availableGuides = [
  {
    title: "Claude vs ChatGPT",
    subtitle: "The Decision Guide",
    description: "Side-by-side comparison so you pick the right AI for your workflow. Know which one to use when.",
    price: "$19",
    badge: "Available Now",
    badgeColor: "#10B981",
    buyUrl: "https://ohamm.gumroad.com/l/claude-vs-chatgpt",
    status: "available" as const,
  },
  {
    title: "OpenClaw Mac Setup",
    subtitle: "AI Agent on Your Mac",
    description: "Set up a personal AI agent that reads your files, runs commands, and never sleeps. Complete installation guide.",
    price: "$29",
    badge: "Available Now",
    badgeColor: "#10B981",
    buyUrl: "https://ohamm.gumroad.com/l/openclaw-mac-setup",
    status: "available" as const,
  },
];

const upcomingGuides = [
  {
    title: "Wispr Flow",
    subtitle: "Voice-to-Text Mastery",
    description: "Dictate faster than you type. Setup, tips, and real workflows.",
    price: "$24",
    badge: "Coming Soon",
    buyUrl: "#",
    status: "coming-soon" as const,
  },
  {
    title: "Perplexity AI",
    subtitle: "Search Reimagined",
    description: "Research at the speed of thought. Replace Google for deep questions.",
    price: "$19",
    badge: "Coming Soon",
    buyUrl: "#",
    status: "coming-soon" as const,
  },
];

export default function Home() {
  const site = getSiteConfig();
  const accent = site.colorHex;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Nav */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{
          background: "color-mix(in srgb, var(--bg) 85%, transparent)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-bold" style={{ color: accent }}>
            {site.name}
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <a href="#guides">Guides</a>
            <a href="#newsletter">Newsletter</a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{ background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
            >
              A Meshuga Brand
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <HeroSection
        siteName={site.name}
        tagline={site.tagline}
        description={site.description}
        accentColor={accent}
        emoji={site.emoji}
      />

      {/* Featured Guide */}
      <section id="guides" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">Featured Guide</h2>
        <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
          Our most popular guide right now
        </p>
        <GuideCard {...featuredGuide} accentColor={accent} featured />
      </section>

      {/* Available Guides */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">More Guides</h2>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              Available now
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {availableGuides.map((g) => (
            <GuideCard key={g.title} {...g} accentColor={accent} />
          ))}
        </div>
      </section>

      {/* Upcoming */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Coming Soon</h2>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              New guides dropping weekly
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingGuides.map((g) => (
            <GuideCard key={g.title} {...g} accentColor={accent} />
          ))}
        </div>
      </section>

      {/* Value Props */}
      <ValueProps accentColor={accent} />

      {/* Premium CTA */}
      <PremiumCTA accentColor={accent} />

      {/* Newsletter */}
      <NewsletterCTA accentColor={accent} />

      {/* Chat Widget */}
      <ChatWidget accentColor={site.colorHex || "#2563EB"} siteName={site.name} />

      {/* Footer */}
      <BrandedFooter siteName={site.name} currentDomain={site.domain} />
    </div>
  );
}
