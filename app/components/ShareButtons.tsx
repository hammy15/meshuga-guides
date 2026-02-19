"use client";

interface ShareButtonsProps {
  title: string;
  url: string;
  message?: string;
}

export default function ShareButtons({ title, url, message }: ShareButtonsProps) {
  const shareText = message || `I just found a 30-minute guide to ${title}. While everyone else is watching 3-hour tutorials.`;
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(url);

  const platforms = [
    {
      name: "X / Twitter",
      icon: "𝕏",
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    },
    {
      name: "LinkedIn",
      icon: "in",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "Reddit",
      icon: "r/",
      href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodeURIComponent(title)}`,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-xs font-bold transition hover:opacity-80"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
          title={`Share on ${p.name}`}
        >
          {p.icon}
        </a>
      ))}
    </div>
  );
}
