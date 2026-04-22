export default function sitemap() {
  const baseUrl = "https://alphacont.ro";

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
