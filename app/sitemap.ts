import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alphacont-sibiu.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
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
    {
      url: `${baseUrl}/ro/blog/primul-articol`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/blog/first-article`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ro/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ro/cookie-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/cookie-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ro/terms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/terms`,
      lastModified: new Date(),
    },
  ];
}
