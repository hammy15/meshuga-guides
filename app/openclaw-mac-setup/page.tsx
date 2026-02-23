"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OpenClawMacSetupPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/guide/openclaw-mac-setup");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: "var(--accent)" }}></div>
        <p>Loading guide...</p>
      </div>
    </div>
  );
}
