import type { MetadataRoute } from "next";
import { getBlogPosts } from "../lib/blog";
import { servicePageSlugs } from "../lib/service-pages";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://alphacont.ro";
  const today = "2026-05-03";

  const pages: string[] = [
    `${baseUrl}/ro`,
    `${baseUrl}/en`,
    `${baseUrl}/ro/anaf`,
    `${baseUrl}/en/anaf`,
    `${baseUrl}/ro/confidentialitate`,
    `${baseUrl}/en/privacy-policy`,
    `${baseUrl}/ro/cookie-uri`,
    `${baseUrl}/en/cookie-policy`,
    `${baseUrl}/ro/termeni`,
    `${baseUrl}/en/terms`,
    `${baseUrl}/ro/stagiu-practica`,
    `${baseUrl}/ro/servicii`,
    `${baseUrl}/en/services`,
    `${baseUrl}/ro/recomandari`,
    `${baseUrl}/en/recommendations`,
    `${baseUrl}/ro/blog`,
    `${baseUrl}/en/blog`,
  ];

  servicePageSlugs.ro.forEach((slug) => {
    pages.push(`${baseUrl}/ro/${slug}`);
  });

  servicePageSlugs.en.forEach((slug) => {
    pages.push(`${baseUrl}/en/${slug}`);
  });

  // BLOG (asta lipsea)
  const blogEn = await getBlogPosts("en");
  const blogRo = await getBlogPosts("ro");

  blogEn.forEach((post) => {
    pages.push(`${baseUrl}/en/blog/${post.slug}`);
  });

  blogRo.forEach((post) => {
    pages.push(`${baseUrl}/ro/blog/${post.slug}`);
  });

  return pages.map((url) => ({
    url,
    lastModified: today,
  }));
}
