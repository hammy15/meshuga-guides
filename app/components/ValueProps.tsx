interface ValuePropsProps {
  accentColor: string;
}

const props = [
  {
    icon: "⏱️",
    title: "30 Minutes, Not 30 Hours",
    description: "Every guide is designed to get you productive fast. No filler, no fluff — just what you need to know.",
  },
  {
    icon: "💬",
    title: "Plain English",
    description: "Written for humans, not developers. If your grandma can't understand it, we rewrite it.",
  },
  {
    icon: "🔄",
    title: "Always Current",
    description: "Software changes fast. Buy once, get free updates forever. Your guide stays accurate.",
  },
  {
    icon: "📱",
    title: "Read Anywhere",
    description: "PDF format works on any device. Read on your phone, tablet, or laptop — online or off.",
  },
];

export default function ValueProps({ accentColor }: ValuePropsProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-center mb-3">What Makes Our Guides Different</h2>
      <p className="text-center mb-12" style={{ color: "var(--text-muted)" }}>
        We obsess over clarity so you don&apos;t have to struggle
      </p>
      <div className="grid gap-8 sm:grid-cols-2">
        {props.map((p) => (
          <div key={p.title} className="flex gap-4">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl"
              style={{ background: `color-mix(in srgb, ${accentColor} 10%, var(--bg-elevated))` }}
            >
              {p.icon}
            </div>
            <div>
              <h3 className="font-semibold mb-1">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
