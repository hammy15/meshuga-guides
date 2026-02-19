"use client";

import { useState } from "react";

const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN || "techcliffnotes.com";

const sites: Record<string, { name: string; tagline: string; description: string; accent: string; emoji: string }> = {
  "techcliffnotes.com": { name: "TechCliffNotes", tagline: "Tech Made Ridiculously Simple", description: "Quick, no-nonsense tech guides that get you from confused to confident in minutes.", accent: "#6366f1", emoji: "📘" },
  "appcliffnotes.com": { name: "AppCliffNotes", tagline: "Master Any App in Minutes", description: "Step-by-step app guides that skip the fluff and get you productive fast.", accent: "#7c3aed", emoji: "📱" },
  "cliffnotetech.com": { name: "CliffNoteTech", tagline: "Technology Without the Headache", description: "Bite-sized tech tutorials for people who just want things to work.", accent: "#059669", emoji: "🧠" },
  "easyappguides.com": { name: "EasyAppGuides", tagline: "Apps Explained Like You're Human", description: "Simple, friendly app walkthroughs for everyday people.", accent: "#d97706", emoji: "✨" },
  "setupsherpa.com": { name: "SetupSherpa", tagline: "Your Guide to Getting Set Up", description: "Installation and setup guides that actually make sense.", accent: "#0d9488", emoji: "🏔️" },
  "softwaremadeasy.com": { name: "SoftwareMadEasy", tagline: "Software Tutorials That Don't Suck", description: "Learn any software without the pain. Clear tutorials, zero confusion.", accent: "#e11d48", emoji: "🎯" },
  "techtutorcafe.com": { name: "TechTutorCafe", tagline: "Pull Up a Chair. Let's Learn Tech.", description: "A warm, friendly place to learn technology at your own pace.", accent: "#ea580c", emoji: "☕" },
};

const site = sites[SITE_DOMAIN] || sites["techcliffnotes.com"];

// Featured guide (Cursor AI — first product)
const featuredGuide = {
  title: "Cursor AI",
  subtitle: "The Complete Cliff Notes",
  description: "Go from confused to confident with AI-powered coding in under 30 minutes. No jargon. No fluff. Just the stuff that matters.",
  price: "$29",
  originalPrice: "$49",
  pages: "28",
  readTime: "30 min",
  badge: "🔥 Trending Now",
  features: [
    "5-minute quickstart — coding with AI in your first session",
    "Every feature explained in plain English",
    "Real examples you can copy-paste and use immediately",
    "Troubleshooting guide — fix the 10 most common issues",
    "Bonus: AI prompt templates that actually work",
  ],
  buyUrl: "https://ohamm.gumroad.com",
};

const upcomingGuides = [
  { title: "Claude vs ChatGPT", subtitle: "The Decision Guide", price: "$19", badge: "Coming This Week", accent: "#a78bfa" },
  { title: "Wispr Flow", subtitle: "Voice-to-Text Mastery", price: "$24", badge: "Coming Soon", accent: "#34d399" },
  { title: "Perplexity AI", subtitle: "Search Reimagined", price: "$19", badge: "Coming Soon", accent: "#60a5fa" },
  { title: "Grok", subtitle: "The Unfiltered AI", price: "$19", badge: "Coming Soon", accent: "#f472b6" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Nav */}
      <nav className="glass sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-bold flex items-center gap-2">
            <span className="text-2xl">{site.emoji}</span>
            <span className="gradient-text">{site.name}</span>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <a href="#guides" className="hover:text-white transition">Guides</a>
            <a href="#upcoming" className="hover:text-white transition">Coming Soon</a>
            <a href="#newsletter" className="hover:text-white transition">Newsletter</a>
          </div>
          <span className="text-xs px-3 py-1 rounded-full" style={{ background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
            A Meshuga Brand
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 0%, ${site.accent}15 0%, transparent 70%)` }} />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
          <div className="inline-block text-xs font-medium px-4 py-1.5 rounded-full mb-6" style={{ background: `${site.accent}20`, color: site.accent, border: `1px solid ${site.accent}30` }}>
            ⚡ Crazy Simple Tech Guides
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            {site.tagline.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{site.tagline.split(" ").pop()}</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: "var(--text-muted)" }}>
            {site.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#guides" className="px-8 py-3.5 rounded-lg font-medium text-white transition hover:opacity-90" style={{ background: site.accent }}>
              Browse Guides →
            </a>
            <a href="#newsletter" className="px-8 py-3.5 rounded-lg font-medium transition hover:bg-white/10" style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>
              Get Free Updates
            </a>
          </div>
        </div>
      </section>

      {/* Featured Guide */}
      <section id="guides" className="max-w-6xl mx-auto px-6 py-20">
        <div className="glow rounded-2xl overflow-hidden" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left — Visual */}
            <div className="p-10 md:p-14 flex flex-col justify-center" style={{ background: `linear-gradient(135deg, ${site.accent}10, ${site.accent}05)` }}>
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-6 self-start" style={{ background: "#ef444420", color: "#ef4444" }}>
                {featuredGuide.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{featuredGuide.title}</h2>
              <p className="text-xl mb-6" style={{ color: "var(--text-muted)" }}>{featuredGuide.subtitle}</p>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>{featuredGuide.description}</p>
              <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
                <span>📄 {featuredGuide.pages} pages</span>
                <span>⏱️ {featuredGuide.readTime} read</span>
                <span>💬 AI chat support</span>
              </div>
            </div>
            {/* Right — Buy */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl font-bold">{featuredGuide.price}</span>
                  <span className="text-lg line-through" style={{ color: "var(--text-muted)" }}>{featuredGuide.originalPrice}</span>
                  <span className="text-sm font-medium px-2 py-0.5 rounded" style={{ background: "#22c55e20", color: "#22c55e" }}>Save 40%</span>
                </div>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>One-time purchase. Lifetime access. Free updates.</p>
              </div>
              <ul className="space-y-3 mb-8">
                {featuredGuide.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5" style={{ color: site.accent }}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={featuredGuide.buyUrl} className="block text-center px-8 py-4 rounded-lg font-semibold text-white text-lg transition hover:opacity-90" style={{ background: `linear-gradient(135deg, ${site.accent}, #a78bfa)` }}>
                Get the Guide — {featuredGuide.price}
              </a>
              <p className="text-center text-xs mt-3" style={{ color: "var(--text-muted)" }}>
                🔒 Secure checkout via Gumroad. Instant download.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Guides */}
      <section id="upcoming" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
        <p className="mb-8" style={{ color: "var(--text-muted)" }}>New guides dropping weekly. Get notified.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingGuides.map((g) => (
            <div key={g.title} className="rounded-xl p-6 transition hover:translate-y-[-2px]" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <span className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-full mb-4" style={{ background: `${g.accent}20`, color: g.accent }}>
                {g.badge}
              </span>
              <h3 className="font-bold text-lg mb-1">{g.title}</h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>{g.subtitle}</p>
              <p className="font-bold text-lg">{g.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-2xl p-10 md:p-16 text-center" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <h2 className="text-3xl font-bold mb-3">
            Never Miss a <span className="gradient-text">New Guide</span>
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            Get notified when we publish new cliff notes + exclusive tips. Free forever.
          </p>
          {subscribed ? (
            <p className="text-lg" style={{ color: "#22c55e" }}>✓ You&apos;re in! Check your inbox.</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) { fetch("/api/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) }); setSubscribed(true); } }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2"
                style={{ background: "var(--bg)", border: "1px solid var(--border)", ["--tw-ring-color" as string]: site.accent }}
                required
              />
              <button type="submit" className="px-6 py-3 rounded-lg font-medium text-white transition hover:opacity-90" style={{ background: site.accent }}>
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "30 min", label: "Average read time" },
            { num: "Plain English", label: "Zero jargon guaranteed" },
            { num: "AI Support", label: "Chat help included" },
            { num: "Free Updates", label: "Buy once, updated forever" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold gradient-text">{s.num}</p>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-6" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-bold text-lg flex items-center gap-2">
              <span>{site.emoji}</span>
              <span className="gradient-text">{site.name}</span>
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>Part of Meshuga — Crazy Simple Tech</p>
          </div>
          <div className="text-sm" style={{ color: "var(--text-muted)" }}>
            <p className="font-medium text-white mb-2">Our Network</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              {Object.entries(sites).filter(([d]) => d !== SITE_DOMAIN).map(([d, s]) => (
                <a key={d} href={`https://${d}`} className="hover:text-white transition">{s.name}</a>
              ))}
              <a href="https://meshuga.com" className="hover:text-white transition">Meshuga</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 text-center text-xs" style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} {site.name}. A Meshuga Brand. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
