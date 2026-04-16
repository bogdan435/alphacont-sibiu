import type { MetadataRoute } from "next";
import { promises as fs } from "fs";
import path from "path";
import { servicePageSlugs } from "@/lib/service-pages";

async function getBlogUrls(baseUrl: string) {
  const locales = ["ro", "en"] as const;

  const allUrls = await Promise.all(
    locales.map(async (locale) => {
      const directory = path.join(process.cwd(), "content", "blog", locale);
      const files = await fs.readdir(directory);

      return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => `${baseUrl}/${locale}/blog/${file.replace(".md", "")}`);
    })
  );

  return allUrls.flat();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://alphacont-sibiu.vercel.app";
  const staticPages = [
    `${baseUrl}/`,
    `${baseUrl}/ro`,
    `${baseUrl}/en`,
    `${baseUrl}/ro/blog`,
    `${baseUrl}/en/blog`,
    `${baseUrl}/ro/privacy-policy`,
    `${baseUrl}/en/privacy-policy`,
    `${baseUrl}/ro/cookie-policy`,
    `${baseUrl}/en/cookie-policy`,
    `${baseUrl}/ro/terms`,
    `${baseUrl}/en/terms`,
  ];

  const servicePages = servicePageSlugs.flatMap((slug) => [
    `${baseUrl}/ro/${slug}`,
    `${baseUrl}/en/${slug}`,
  ]);
  const blogPages = await getBlogUrls(baseUrl);

  return [...staticPages, ...servicePages, ...blogPages].map((url) => ({
    url,
    lastModified: new Date(),
  }));
}
