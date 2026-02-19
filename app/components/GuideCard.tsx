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
      {/* Guide cover placeholder */}
      <div
        className={`rounded-xl mb-6 flex items-center justify-center ${featured ? "md:mb-0 md:min-w-[280px] md:h-[320px]" : "h-[200px]"}`}
        style={{
          background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 15%, var(--bg-elevated)), color-mix(in srgb, ${accentColor} 5%, var(--bg-elevated)))`,
          border: "1px solid var(--border)",
        }}
      >
        <div className="text-center">
          <p className="text-3xl font-bold mb-1" style={{ color: accentColor }}>{title}</p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>{subtitle}</p>
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
