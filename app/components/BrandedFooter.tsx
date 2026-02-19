interface BrandedFooterProps {
  siteName: string;
  currentDomain: string;
}

const networkSites = [
  { name: "TechCliffNotes", domain: "techcliffnotes.com" },
  { name: "AppCliffNotes", domain: "appcliffnotes.com" },
  { name: "CliffNoteTech", domain: "cliffnotetech.com" },
  { name: "EasyAppGuides", domain: "easyappguides.com" },
  { name: "SetupSherpa", domain: "setupsherpa.com" },
  { name: "SoftwareMadEasy", domain: "softwaremadeasy.com" },
  { name: "TechTutorCafe", domain: "techtutorcafe.com" },
];

export default function BrandedFooter({ siteName, currentDomain }: BrandedFooterProps) {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-bold text-lg mb-1">{siteName}</p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Part of <a href="https://meshuga.com" className="underline">Meshuga</a> — Crazy Simple Tech
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold mb-3">Our Network</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
              {networkSites
                .filter((s) => s.domain !== currentDomain)
                .map((s) => (
                  <a key={s.domain} href={`https://${s.domain}`} className="transition hover:underline">
                    {s.name}
                  </a>
                ))}
              <a href="https://meshuga.com" className="transition hover:underline">
                Meshuga
              </a>
            </div>
          </div>
        </div>
        <div
          className="mt-8 pt-6 text-center text-xs"
          style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          &copy; {new Date().getFullYear()} {siteName}. A Meshuga Brand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
