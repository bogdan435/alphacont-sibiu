import { getBaseUrl } from "@/lib/seo";

export default function sitemap() {
  const baseUrl = getBaseUrl();

  return [
    {
      url: `${baseUrl}/ro`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ro/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
    },
  ];
}
