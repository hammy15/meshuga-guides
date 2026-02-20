"use client";

interface PremiumCTAProps {
  accentColor: string;
}

export default function PremiumCTA({ accentColor }: PremiumCTAProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div
        className="rounded-2xl p-10 md:p-14"
        style={{
          background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 8%, var(--bg-card)), var(--bg-card))`,
          border: "1px solid var(--border)",
        }}
      >
        <div className="max-w-xl mx-auto text-center">
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-6"
            style={{ background: `color-mix(in srgb, ${accentColor} 15%, transparent)`, color: accentColor }}
          >
            Premium
          </span>
          <h2 className="text-3xl font-bold mb-3">Every Guide. One Price.</h2>
          <p className="mb-2" style={{ color: "var(--text-muted)" }}>
            Access the full library — current guides and every new one we publish.
          </p>
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-4xl font-bold">$9.99</span>
            <span style={{ color: "var(--text-muted)" }}>/month</span>
          </div>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            That&apos;s less than a coffee. New guides drop weekly.
          </p>
          <a
            href="https://meshuga.com/#premium"
            className="inline-block px-8 py-4 rounded-xl font-semibold text-white transition hover:opacity-90 text-lg"
            style={{ background: accentColor }}
          >
            Get Ahead for $9.99/mo
          </a>
          <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>Cancel anytime. No lock-in.</p>
        </div>
      </div>
    </section>
  );
}
