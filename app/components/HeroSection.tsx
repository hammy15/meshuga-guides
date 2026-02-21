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
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${accentColor}, transparent)`,
        }}
      />
      
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24">
        {/* Meshuga badge */}
        <div className="text-center mb-8">
          <span
            className="inline-block text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full"
            style={{
              background: `color-mix(in srgb, ${accentColor} 12%, transparent)`,
              color: accentColor,
              border: `1px solid color-mix(in srgb, ${accentColor} 20%, transparent)`,
            }}
          >
            A Meshuga Brand
          </span>
        </div>

        {/* Hero grid: headline + featured product */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline + value props */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
              {tagline}
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {description}
            </p>
            
            {/* Trust signals */}
            <div className="flex flex-col gap-3 text-sm mb-10" style={{ color: "var(--text-muted)" }}>
              <div className="flex items-center gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: accentColor }}
                />
                <span>30-minute reads · No fluff</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: accentColor }}
                />
                <span>Real screenshots · Step-by-step</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: accentColor }}
                />
                <span>Free lifetime updates</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#guides"
                className="px-8 py-4 rounded-xl font-semibold text-white transition hover:opacity-90 text-center"
                style={{ background: accentColor }}
              >
                View All Guides
              </a>
              <a
                href="#newsletter"
                className="px-8 py-4 rounded-xl font-semibold transition text-center"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
              >
                Get Free Updates
              </a>
            </div>
          </div>

          {/* Right: Featured guide card */}
          <div>
            <div
              className="rounded-2xl p-8 transition-all"
              style={{
                background: "var(--bg-card)",
                border: "2px solid var(--border)",
                boxShadow: `0 20px 60px color-mix(in srgb, ${accentColor} 8%, transparent)`,
              }}
            >
              {/* Glass morphism thumbnail */}
              <div
                className="relative rounded-xl mb-6 h-44 flex flex-col items-start justify-end overflow-hidden"
                style={{
                  background: `linear-gradient(160deg, ${accentColor}, color-mix(in srgb, ${accentColor} 60%, #000))`,
                }}
              >
                <div
                  className="absolute top-[-30%] right-[-20%] w-[60%] h-[80%] rounded-full opacity-20"
                  style={{ background: "radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)" }}
                />
                <div
                  className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] rounded-full opacity-10"
                  style={{ background: "radial-gradient(circle, rgba(255,255,255,0.4), transparent 60%)" }}
                />
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative z-10 p-6 w-full">
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-2">Featured Guide</p>
                  <p className="text-2xl font-bold text-white leading-tight">Cursor AI</p>
                  <p className="text-sm text-white/70">The Complete Cliff Notes</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Cursor AI — The Complete Cliff Notes</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                  Go from confused to confident with AI-powered coding in under 30 minutes. No jargon. No fluff.
                </p>
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                  <span>✓ 24 pages</span>
                  <span>·</span>
                  <span>✓ Real screenshots</span>
                  <span>·</span>
                  <span>✓ Lifetime updates</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-3xl font-bold">$29</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>one-time payment</div>
                </div>
                <a
                  href="https://ohamm.gumroad.com/l/cursor-ai"
                  className="px-6 py-3 rounded-xl font-semibold text-white transition hover:opacity-90 whitespace-nowrap"
                  style={{ background: accentColor }}
                >
                  Buy Now — $29
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
