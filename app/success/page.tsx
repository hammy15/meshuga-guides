import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <div className="max-w-md text-center">
        <div className="text-5xl mb-6">✓</div>
        <h1 className="text-3xl font-bold mb-4">Purchase Complete</h1>
        <p className="mb-8" style={{ color: "var(--text-muted)" }}>
          Check your email for the download link. Your guide is on its way.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg font-medium text-white transition hover:opacity-90"
          style={{ background: "var(--accent)" }}
        >
          Back to Guides
        </Link>
      </div>
    </div>
  );
}
