import { cursorAiGuide } from "./cursor-ai";
import { claudeVsChatgptGuide } from "./claude-vs-chatgpt";
import { openclawMacSetupGuide } from "./openclaw-mac-setup";

export const guides = {
  "cursor-ai": cursorAiGuide,
  "claude-vs-chatgpt": claudeVsChatgptGuide,
  "openclaw-mac-setup": openclawMacSetupGuide,
} as const;

export type GuideSlug = keyof typeof guides;

export function getGuide(slug: string) {
  return guides[slug as GuideSlug] ?? null;
}

export function getAllSlugs() {
  return Object.keys(guides);
}
