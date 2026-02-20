"use client";

interface TweetableQuoteProps {
  quote: string;
  guideUrl: string;
}

export default function TweetableQuote({ quote, guideUrl }: TweetableQuoteProps) {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}"\n\n`)}&url=${encodeURIComponent(guideUrl)}`;

  return (
    <blockquote
      className="my-8 relative rounded-xl p-6 group cursor-pointer"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      onClick={() => window.open(tweetUrl, "_blank")}
    >
      <p className="text-lg font-medium leading-relaxed mb-3" style={{ color: "var(--text)" }}>
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>— Cursor AI Cliff Notes</span>
        <span
          className="text-xs font-medium px-3 py-1.5 rounded-lg transition opacity-60 group-hover:opacity-100"
          style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          Share on 𝕏
        </span>
      </div>
    </blockquote>
  );
}
