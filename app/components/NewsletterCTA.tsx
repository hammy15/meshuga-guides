"use client";

import { useState } from "react";

interface NewsletterCTAProps {
  accentColor: string;
}

export default function NewsletterCTA({ accentColor }: NewsletterCTAProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section id="newsletter" className="max-w-5xl mx-auto px-6 py-20">
      <div
        className="rounded-2xl p-10 md:p-14 text-center"
        style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
      >
        <h2 className="text-2xl font-bold mb-3">Never Miss a New Guide</h2>
        <p className="mb-8 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
          Free weekly updates + exclusive tips. Join learners who stay ahead.
        </p>
        {subscribed ? (
          <p className="text-lg font-medium" style={{ color: "#10b981" }}>
            You&apos;re in. Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) {
                fetch("/api/subscribe", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email }),
                });
                setSubscribed(true);
              }
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
              required
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl font-semibold text-white transition hover:opacity-90"
              style={{ background: accentColor }}
            >
              Get Ahead Every Week
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
