export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  domain: string;
  color: string; // tailwind color
  colorHex: string;
  emoji: string;
}

const sites: Record<string, SiteConfig> = {
  "techcliffnotes.com": {
    name: "TechCliffNotes",
    tagline: "Tech Made Ridiculously Simple",
    description: "Quick, no-nonsense tech guides that get you from confused to confident in minutes.",
    domain: "techcliffnotes.com",
    color: "blue",
    colorHex: "#2563eb",
    emoji: "📘",
  },
  "appcliffnotes.com": {
    name: "AppCliffNotes",
    tagline: "Master Any App in Minutes",
    description: "Step-by-step app guides that skip the fluff and get you productive fast.",
    domain: "appcliffnotes.com",
    color: "violet",
    colorHex: "#7c3aed",
    emoji: "📱",
  },
  "cliffnotetech.com": {
    name: "CliffNoteTech",
    tagline: "Technology Without the Headache",
    description: "Bite-sized tech tutorials for people who just want things to work.",
    domain: "cliffnotetech.com",
    color: "emerald",
    colorHex: "#059669",
    emoji: "🧠",
  },
  "easyappguides.com": {
    name: "EasyAppGuides",
    tagline: "Apps Explained Like You're Human",
    description: "Simple, friendly app walkthroughs for everyday people. No jargon, just results.",
    domain: "easyappguides.com",
    color: "amber",
    colorHex: "#d97706",
    emoji: "✨",
  },
  "setupsherpa.com": {
    name: "SetupSherpa",
    tagline: "Your Guide to Getting Set Up",
    description: "Installation and setup guides that actually make sense. We'll get you there.",
    domain: "setupsherpa.com",
    color: "teal",
    colorHex: "#0d9488",
    emoji: "🏔️",
  },
  "softwaremadeasy.com": {
    name: "SoftwareMadEasy",
    tagline: "Software Tutorials That Don't Suck",
    description: "Learn any software without the pain. Clear tutorials, real screenshots, zero confusion.",
    domain: "softwaremadeasy.com",
    color: "rose",
    colorHex: "#e11d48",
    emoji: "🎯",
  },
  "techtutorcafe.com": {
    name: "TechTutorCafe",
    tagline: "Pull Up a Chair. Let's Learn Tech.",
    description: "A warm, friendly place to learn technology at your own pace. Coffee not included.",
    domain: "techtutorcafe.com",
    color: "orange",
    colorHex: "#ea580c",
    emoji: "☕",
  },
};

export function getSiteConfig(): SiteConfig {
  const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN || "techcliffnotes.com";
  return sites[domain] || sites["techcliffnotes.com"];
}

export function getAllSites(): SiteConfig[] {
  return Object.values(sites);
}
