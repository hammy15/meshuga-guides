"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function SuccessContent() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");

  // Fire Reddit Purchase event on page load
  useEffect(() => {
    if (typeof window !== "undefined" && window.rdt) {
      window.rdt("track", "Purchase");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <div className="max-w-md text-center">
        <div className="text-5xl mb-6">✓</div>
        <h1 className="text-3xl font-bold mb-4">Purchase Complete</h1>
        <p className="mb-8" style={{ color: "var(--text-muted)" }}>
          Your guide is ready to download. Click below to get your PDF.
        </p>

        {sessionId ? (
          <a
            href={`/api/download?session_id=${sessionId}`}
            className="inline-block px-8 py-4 rounded-xl font-semibold text-white text-lg transition hover:opacity-90 mb-4"
            style={{ background: "var(--accent)" }}
          >
            Download Your Guide (PDF)
          </a>
        ) : (
          <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
            Check your email for the download link, or contact support if you need help.
          </p>
        )}

        <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
          A confirmation email has also been sent. You can re-download anytime from this link.
        </p>

        {/* Post-purchase share */}
        <div className="mt-8 p-6 rounded-xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="text-sm font-medium mb-3">
            You&apos;re ahead of 95% of people. Share this with someone who needs it.
          </p>
          <div className="flex justify-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Just grabbed the Cursor AI complete guide. 30 minutes > 3 hour YouTube tutorials.")}&url=${encodeURIComponent("https://techcliffnotes.com/guide/cursor-ai")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-medium transition hover:opacity-80"
              style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
            >
              Share on 𝕏
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://techcliffnotes.com/guide/cursor-ai")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-medium transition hover:opacity-80"
              style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
            >
              Share on LinkedIn
            </a>
          </div>
        </div>

        <a
          href="/"
          className="inline-block mt-6 text-sm font-medium transition"
          style={{ color: "var(--accent)" }}
        >
          ← Back to Guides
        </a>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--bg)", color: "var(--text)" }}>
        <p>Loading...</p>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
