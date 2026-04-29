import { getBlogPosts } from "../lib/blog";
import { servicePageSlugs } from "../lib/service-pages";

export default async function sitemap() {
  const baseUrl = "https://alphacont.ro";

  const pages: string[] = [
    `${baseUrl}/ro`,
    `${baseUrl}/en`,
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
    lastModified: new Date(),
  }));
}
