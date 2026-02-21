import type { Metadata } from "next";
import { getGuide, getAllSlugs } from "@/lib/guides";
import { getSiteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  const site = getSiteConfig();

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  const title = `${guide.title}: ${guide.subtitle} | ${site.name}`;
  const description = `${guide.subtitle}. ${guide.totalPages}-page guide — ${guide.readTime} to mastery. ${guide.price}, one-time purchase with free lifetime updates.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.title}: ${guide.subtitle}`,
      description,
    },
    other: {
      "article:published_time": guide.lastUpdated,
    },
  };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
