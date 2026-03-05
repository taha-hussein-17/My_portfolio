import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://taha-portfolio.com";
  const now = new Date();
  const routes: MetadataRoute.Sitemap = ["", "/about", "/projects"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  })) as MetadataRoute.Sitemap;
  return routes;
}
