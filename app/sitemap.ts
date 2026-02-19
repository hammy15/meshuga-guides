import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN || "techcliffnotes.com";
  const url = `https://${domain}`;
  return [
    { url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  ];
}
