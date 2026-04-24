import { servicePageSlugs } from "../lib/service-pages";

export default function sitemap() {
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

  return pages.map((url) => ({
    url,
    lastModified: new Date(),
  }));
}
