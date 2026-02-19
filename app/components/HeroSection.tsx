"use client";

interface HeroSectionProps {
  siteName: string;
  tagline: string;
  description: string;
  accentColor: string;
  emoji: string;
}

export default function HeroSection({ siteName, tagline, description, accentColor }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient backdrop */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${accentColor}25, transparent)`,
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
        <div
          className="inline-block text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-8"
          style={{
            background: `color-mix(in srgb, ${accentColor} 12%, transparent)`,
            color: accentColor,
            border: `1px solid color-mix(in srgb, ${accentColor} 25%, transparent)`,
          }}
        >
          A Meshuga Brand
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          {tagline}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#guides"
            className="px-8 py-4 rounded-xl font-semibold text-white transition hover:opacity-90 text-lg"
            style={{ background: accentColor }}
          >
            Browse Guides
          </a>
          <a
            href="#newsletter"
            className="px-8 py-4 rounded-xl font-semibold transition text-lg"
            style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
          >
            Get Free Updates
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm" style={{ color: "var(--text-muted)" }}>
          <span>30 min average read</span>
          <span className="hidden sm:inline">·</span>
          <span>Plain English guaranteed</span>
          <span className="hidden sm:inline">·</span>
          <span>Free lifetime updates</span>
        </div>
      </div>
    </section>
  );
}
