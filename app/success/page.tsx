"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");

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

        <a
          href="/"
          className="text-sm font-medium transition"
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
