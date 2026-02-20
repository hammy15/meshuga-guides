"use client";

import { useState } from "react";
import ThemeToggle from "../../components/ThemeToggle";
import SocialProofTicker from "../../components/SocialProofTicker";
import ShareButtons from "../../components/ShareButtons";
import PurchaseCounter from "../../components/PurchaseCounter";
import TweetableQuote from "../../components/TweetableQuote";
import { cursorAiGuide } from "@/lib/guides/cursor-ai";

const guide = cursorAiGuide;

async function handleCheckout() {
  try {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId: guide.priceId }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      // Fallback to Gumroad
      window.location.href = guide.buyUrl;
    }
  } catch {
    window.location.href = guide.buyUrl;
  }
}

function StepBlock({ step }: { step: (typeof guide.sections)[number] }) {
  return (
    <div className="py-16 md:py-20" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-2xl mx-auto px-6">
        {/* Step number */}
        <div className="mb-6">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold"
            style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)" }}
          >
            {step.number}
          </span>
        </div>

        {/* Action headline */}
        <h2 className="text-2xl md:text-3xl font-bold mb-5 tracking-tight">
          {step.action}
        </h2>

        {/* Body */}
        <div className="space-y-4 mb-6">
          {step.body.split("\n\n").map((para, i) => (
            <p key={i} className="leading-relaxed" style={{ lineHeight: "1.8" }}>
              {para}
            </p>
          ))}
        </div>

        {/* Screenshot placeholder */}
        {step.screenshotAlt && (
          <div
            className="rounded-xl mb-6 flex items-center justify-center p-8"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)", minHeight: "200px" }}
          >
            <p className="text-sm text-center max-w-xs" style={{ color: "var(--text-muted)" }}>
              {step.screenshotAlt}
            </p>
          </div>
        )}

        {/* Whisper */}
        {step.whisper && (
          <p
            className="text-sm italic leading-relaxed pl-4"
            style={{ color: "var(--text-muted)", borderLeft: "2px solid var(--border)" }}
          >
            {step.whisper}
          </p>
        )}
      </div>
    </div>
  );
}

function BuyButton({ size = "normal" }: { size?: "normal" | "large" }) {
  return (
    <button
      onClick={handleCheckout}
      className={`font-semibold text-white transition hover:opacity-90 cursor-pointer ${
        size === "large" ? "px-10 py-4 rounded-xl text-lg" : "px-6 py-3 rounded-lg text-sm"
      }`}
      style={{ background: "var(--accent)" }}
    >
      Get Full Guide — {guide.price}
    </button>
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
      <header className="pt-20 pb-12">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: "color-mix(in srgb, #ef4444 15%, transparent)", color: "#ef4444" }}
            >
              {guide.badge}
            </span>
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)" }}
            >
              Updated for v{guide.version}
            </span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              {guide.lastUpdated}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 tracking-tight">
            {guide.title}
          </h1>
          <p className="text-xl mb-8" style={{ color: "var(--text-muted)" }}>
            {guide.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            <span>{guide.readTime} read</span>
            <span>{guide.totalPages} pages</span>
            <span>{guide.previewPages} pages free preview</span>
          </div>

          {/* Quick Buy */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <BuyButton size="large" />
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>
              One-time purchase. Lifetime updates. Instant download.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <PurchaseCounter count={127} />
            <ShareButtons
              title={guide.title}
              url="https://techcliffnotes.com/guide/cursor-ai"
              message="I just found a 30-minute guide to Cursor AI. While everyone else is watching 3-hour tutorials."
            />
          </div>
        </div>
      </header>

      {/* Who It's For */}
      <section className="py-12" style={{ background: "var(--bg-elevated)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">You'll love this guide if:</h3>
              <ul className="space-y-2 text-sm">
                {guide.whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: "var(--accent)" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3" style={{ color: "var(--text-muted)" }}>Skip it if:</h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
                {guide.skipIf.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Steps */}
      <main>
        <div className="max-w-2xl mx-auto px-6 pt-12">
          <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
            Free preview — {guide.previewPages} of {guide.totalPages} pages
          </p>
        </div>
        {guide.sections.map((step, i) => (
          <div key={i}>
            <StepBlock step={step} />
            {i === 2 && (
              <div className="max-w-2xl mx-auto px-6">
                <TweetableQuote
                  quote="This isn't autocomplete on steroids. This is AI that understands context."
                  guideUrl="https://techcliffnotes.com/guide/cursor-ai"
                />
              </div>
            )}
            {i === 5 && (
              <div className="max-w-2xl mx-auto px-6">
                <TweetableQuote
                  quote="Comments are the best prompts. Write what you want in plain English, then let Cursor implement it."
                  guideUrl="https://techcliffnotes.com/guide/cursor-ai"
                />
              </div>
            )}
            {i === 8 && (
              <div className="max-w-2xl mx-auto px-6">
                <TweetableQuote
                  quote="Treat AI code like code from a smart but sometimes careless colleague — review before merging."
                  guideUrl="https://techcliffnotes.com/guide/cursor-ai"
                />
              </div>
            )}
          </div>
        ))}
      </main>

      {/* Table of Contents */}
      <section className="py-16" style={{ background: "var(--bg-elevated)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">What&apos;s in the Full Guide</h2>
          <div className="space-y-4">
            {guide.tableOfContents.map((section, i) => (
              <div
                key={section.section}
                className="p-5 rounded-xl"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-semibold">{section.section}</h3>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>Pages {section.pages}</span>
                </div>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{section.items}</p>
                {i === 0 && (
                  <span className="inline-block text-xs mt-2 px-2 py-0.5 rounded" style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)" }}>
                    Free preview above
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anchoring + Full Guide CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <div className="text-center mb-8">
              <p className="text-sm font-medium mb-4" style={{ color: "var(--text-muted)" }}>
                A Cursor AI course costs $200+. This guide is {guide.price} and gets you there in {guide.readTime}.
              </p>
              <h2 className="text-3xl font-bold mb-2">Get the Complete Guide</h2>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {guide.totalPages} pages across 4 sections. What you get:
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8 text-sm">
              {guide.fullGuideIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "var(--accent)" }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <BuyButton size="large" />
              <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
                Secure checkout via Stripe. Instant PDF download. Free updates forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Ticker */}
      <SocialProofTicker />

      {/* Footer */}
      <footer
        className="py-8 text-center text-xs"
        style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}
      >
        <p>Cursor AI Cliff Notes — A Meshuga Guide</p>
        <p className="mt-1">
          <a href="https://meshuga.com" className="underline">meshuga.com</a> — Crazy Simple Tech
        </p>
      </footer>
    </div>
  );
}
