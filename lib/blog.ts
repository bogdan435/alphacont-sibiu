import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

function getBlogDirectory(locale: string) {
  const safeLocale = locale === "en" ? "en" : "ro";
  return path.join(process.cwd(), `content/blog/${safeLocale}`);
}

type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  formattedDate: string;
  category: string;
  tags: string[];
};

export function formatBlogDate(date: string, locale: string) {
  const safeLocale = locale === "en" ? "en-GB" : "ro-RO";
  const parsed = new Date(`${date}T12:00:00Z`);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat(safeLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}

export async function getBlogPosts(locale: string): Promise<BlogPostMeta[]> {
  const blogDirectory = getBlogDirectory(locale);

  let files: string[] = [];

  try {
    files = await fs.readdir(blogDirectory);
  } catch {
    return [];
  }

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const fullPath = path.join(blogDirectory, file);
        const fileContents = await fs.readFile(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug: file.replace(".md", ""),
          title: data.title || file.replace(".md", "").replace(/-/g, " "),
          description: data.description || "",
          date: data.date || "",
          formattedDate: formatBlogDate(data.date || "", locale),
          category: data.category || "",
          tags: Array.isArray(data.tags) ? data.tags : [],
        };
      }),
  );

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getBlogPostBySlug(locale: string, slug: string) {
  const blogDirectory = getBlogDirectory(locale);
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug.replace(/-/g, " "),
    description: data.description || "",
    date: data.date || "",
    formattedDate: formatBlogDate(data.date || "", locale),
    category: data.category || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    content,
  };
}

export async function getRelatedBlogPosts(locale: string, currentSlug: string) {
  const posts = await getBlogPosts(locale);
  return posts.filter((post) => post.slug !== currentSlug).slice(0, 3);
}
