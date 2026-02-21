"use client";

interface GuideCardProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  badge?: string;
  badgeColor?: string;
  accentColor: string;
  buyUrl: string;
  status: "available" | "coming-soon";
  featured?: boolean;
}

export default function GuideCard({
  title,
  subtitle,
  description,
  price,
  badge,
  badgeColor,
  accentColor,
  buyUrl,
  status,
  featured,
}: GuideCardProps) {
  return (
    <article
      className={`rounded-2xl p-8 transition-all duration-200 hover:translate-y-[-4px] ${featured ? "md:col-span-2 md:flex md:gap-10 md:items-center" : ""}`}
      style={{
        background: "var(--bg-card)",
        border: `1px solid var(--border)`,
        boxShadow: featured ? `0 8px 40px color-mix(in srgb, ${accentColor} 10%, transparent)` : undefined,
      }}
    >
      {/* Guide cover — premium glass morphism */}
      <div
        className={`relative rounded-2xl mb-6 flex flex-col items-start justify-end overflow-hidden ${featured ? "md:mb-0 md:min-w-[280px] md:h-[320px]" : "h-[220px]"}`}
        style={{
          background: `linear-gradient(160deg, ${accentColor}, color-mix(in srgb, ${accentColor} 60%, #000))`,
        }}
      >
        {/* Decorative geometric elements */}
        <div
          className="absolute top-[-30%] right-[-20%] w-[60%] h-[80%] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.4), transparent 60%)" }}
        />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Content overlay */}
        <div className="relative z-10 p-6 w-full">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-2">Meshuga Guide</p>
          <p className="text-2xl font-bold text-white leading-tight mb-1">{title}</p>
          <p className="text-sm text-white/70">{subtitle}</p>
        </div>
      </div>

      <div className={featured ? "flex-1" : ""}>
        {badge && (
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
            style={{
              background: `color-mix(in srgb, ${badgeColor || accentColor} 15%, transparent)`,
              color: badgeColor || accentColor,
            }}
          >
            {badge}
          </span>
        )}
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>{subtitle}</p>
        <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>{description}</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">{price}</span>
            {status === "available" && (
              <span className="text-xs ml-2" style={{ color: "var(--text-muted)" }}>one-time</span>
            )}
          </div>
          {status === "available" ? (
            <a
              href={buyUrl}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition hover:opacity-90"
              style={{ background: accentColor }}
            >
              Get Guide — {price}
            </a>
          ) : (
            <span
              className="px-5 py-2.5 rounded-xl text-sm font-medium"
              style={{ background: "var(--bg-elevated)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
            >
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
