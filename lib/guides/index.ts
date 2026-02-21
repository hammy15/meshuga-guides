import { cursorAiGuide } from "./cursor-ai";
import { claudeVsChatgptGuide } from "./claude-vs-chatgpt";

export const guides = {
  "cursor-ai": cursorAiGuide,
  "claude-vs-chatgpt": claudeVsChatgptGuide,
} as const;

export type GuideSlug = keyof typeof guides;

export function getGuide(slug: string) {
  return guides[slug as GuideSlug] ?? null;
}

export function getAllSlugs() {
  return Object.keys(guides);
}
