import type { MetadataRoute } from "next";
import { GUIDES } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = ([
    { url: "https://harborwynai.io", priority: 1, changeFrequency: "weekly" },
    { url: "https://harborwynai.io/platform", priority: 0.9, changeFrequency: "monthly" },
    { url: "https://harborwynai.io/about", priority: 0.7, changeFrequency: "monthly" },
    { url: "https://harborwynai.io/guides", priority: 0.8, changeFrequency: "weekly" },
    { url: "https://harborwynai.io/faq", priority: 0.6, changeFrequency: "monthly" },
    { url: "https://harborwynai.io/contact", priority: 0.6, changeFrequency: "monthly" },
    { url: "https://harborwynai.io/sign-up", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://harborwynai.io/sign-in", priority: 0.4, changeFrequency: "yearly" },
    { url: "https://harborwynai.io/terms", priority: 0.3, changeFrequency: "yearly" },
    { url: "https://harborwynai.io/privacy", priority: 0.3, changeFrequency: "yearly" },
    { url: "https://harborwynai.io/risk-disclosure", priority: 0.3, changeFrequency: "yearly" },
  ] as MetadataRoute.Sitemap).map((page) => ({ ...page, lastModified }));

  const guidePages: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `https://harborwynai.io/guides/${guide.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...guidePages];
}
