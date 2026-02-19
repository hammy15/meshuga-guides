"use client";

import { useState } from "react";

const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN || "techcliffnotes.com";

const sites: Record<string, { name: string; tagline: string; description: string; color: string; colorHex: string; emoji: string }> = {
  "techcliffnotes.com": { name: "TechCliffNotes", tagline: "Tech Made Ridiculously Simple", description: "Quick, no-nonsense tech guides that get you from confused to confident in minutes.", color: "blue", colorHex: "#2563eb", emoji: "📘" },
  "appcliffnotes.com": { name: "AppCliffNotes", tagline: "Master Any App in Minutes", description: "Step-by-step app guides that skip the fluff and get you productive fast.", color: "violet", colorHex: "#7c3aed", emoji: "📱" },
  "cliffnotetech.com": { name: "CliffNoteTech", tagline: "Technology Without the Headache", description: "Bite-sized tech tutorials for people who just want things to work.", color: "emerald", colorHex: "#059669", emoji: "🧠" },
  "easyappguides.com": { name: "EasyAppGuides", tagline: "Apps Explained Like You're Human", description: "Simple, friendly app walkthroughs for everyday people. No jargon, just results.", color: "amber", colorHex: "#d97706", emoji: "✨" },
  "setupsherpa.com": { name: "SetupSherpa", tagline: "Your Guide to Getting Set Up", description: "Installation and setup guides that actually make sense. We'll get you there.", color: "teal", colorHex: "#0d9488", emoji: "🏔️" },
  "softwaremadeasy.com": { name: "SoftwareMadEasy", tagline: "Software Tutorials That Don't Suck", description: "Learn any software without the pain. Clear tutorials, real screenshots, zero confusion.", color: "rose", colorHex: "#e11d48", emoji: "🎯" },
  "techtutorcafe.com": { name: "TechTutorCafe", tagline: "Pull Up a Chair. Let's Learn Tech.", description: "A warm, friendly place to learn technology at your own pace. Coffee not included.", color: "orange", colorHex: "#ea580c", emoji: "☕" },
};

const allSites = [
  { name: "TechCliffNotes", domain: "techcliffnotes.com" },
  { name: "AppCliffNotes", domain: "appcliffnotes.com" },
  { name: "CliffNoteTech", domain: "cliffnotetech.com" },
  { name: "EasyAppGuides", domain: "easyappguides.com" },
  { name: "SetupSherpa", domain: "setupsherpa.com" },
  { name: "SoftwareMadEasy", domain: "softwaremadeasy.com" },
  { name: "TechTutorCafe", domain: "techtutorcafe.com" },
];

const site = sites[SITE_DOMAIN] || sites["techcliffnotes.com"];

const guides = [
  { title: "How to Set Up Two-Factor Authentication", category: "Security", time: "5 min", soon: true },
  { title: "Google Sheets for Complete Beginners", category: "Productivity", time: "8 min", soon: true },
  { title: "iPhone Settings You Should Change Right Now", category: "Mobile", time: "6 min", soon: true },
  { title: "Zoom Meeting Setup (Without the Embarrassment)", category: "Communication", time: "4 min", soon: true },
  { title: "Password Managers: Which One and How", category: "Security", time: "7 min", soon: true },
  { title: "Backing Up Your Phone in 3 Minutes", category: "Mobile", time: "3 min", soon: true },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubscribed(true);
      setEmail("");
    } catch {
      alert("Something went wrong. Try again.");
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <a href="/" className="text-xl font-bold" style={{ color: site.colorHex }}>
            {site.emoji} {site.name}
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-500">
            <a href="#guides" className="hover:text-slate-900 transition">Guides</a>
            <a href="#newsletter" className="hover:text-slate-900 transition">Newsletter</a>
            <a href="#about" className="hover:text-slate-900 transition">About</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-4 text-center" style={{ background: `linear-gradient(135deg, ${site.colorHex}10, ${site.colorHex}05)` }}>
        <p className="text-sm font-medium mb-4" style={{ color: site.colorHex }}>A Meshuga Brand — Crazy Simple Tech</p>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 max-w-3xl mx-auto leading-tight">
          {site.tagline}
        </h1>
        <p className="text-lg text-slate-500 max-w-xl mx-auto mb-8">
          {site.description}
        </p>
        <a href="#guides" className="inline-block text-white font-medium px-8 py-3 rounded-lg transition hover:opacity-90" style={{ backgroundColor: site.colorHex }}>
          Browse Guides
        </a>
      </section>

      {/* Featured Guides */}
      <section id="guides" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-2">Featured Guides</h2>
        <p className="text-slate-500 mb-8">Quick, practical guides — no fluff, no jargon.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <div key={guide.title} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition relative">
              {guide.soon && (
                <span className="absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-500">
                  Coming Soon
                </span>
              )}
              <span className="text-xs font-medium px-2 py-0.5 rounded-full mb-3 inline-block" style={{ backgroundColor: `${site.colorHex}15`, color: site.colorHex }}>
                {guide.category}
              </span>
              <h3 className="font-semibold text-lg mb-2">{guide.title}</h3>
              <p className="text-sm text-slate-400">{guide.time} read</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-16 px-4" style={{ background: `linear-gradient(135deg, ${site.colorHex}08, ${site.colorHex}03)` }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Get New Guides Weekly</h2>
          <p className="text-slate-500 mb-6">
            Simple tech guides delivered to your inbox. Unsubscribe anytime.
          </p>
          {subscribed ? (
            <p className="text-green-600 font-medium">You&apos;re in! Check your inbox.</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2"
                style={{ ["--tw-ring-color" as string]: site.colorHex }}
                required
              />
              <button type="submit" className="text-white font-medium px-6 py-3 rounded-lg transition hover:opacity-90" style={{ backgroundColor: site.colorHex }}>
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-3">About {site.name}</h2>
        <p className="text-slate-500 leading-relaxed">
          {site.name} is part of the <strong>Meshuga</strong> family — a network of sites dedicated to making
          technology accessible to everyone. We believe tech shouldn&apos;t require a PhD to understand. Our guides are
          written in plain English, tested by real people, and designed to get you from confused to confident
          as fast as possible.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <p className="font-bold text-lg" style={{ color: site.colorHex }}>{site.emoji} {site.name}</p>
              <p className="text-sm text-slate-500 mt-1">Part of the Meshuga family — Crazy Simple Tech</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700 mb-2">Our Network</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-slate-500">
                {allSites.filter(s => s.domain !== SITE_DOMAIN).map((s) => (
                  <a key={s.domain} href={`https://${s.domain}`} className="hover:text-slate-900 transition">{s.name}</a>
                ))}
                <a href="https://meshuga.com" className="hover:text-slate-900 transition">Meshuga</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-200 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} {site.name}. A Meshuga Brand. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
