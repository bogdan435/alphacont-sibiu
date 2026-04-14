import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

function getBlogDirectory(locale: string) {
  const safeLocale = locale === "en" ? "en" : "ro";
  return path.join(process.cwd(), `content/blog/${safeLocale}`);
}

export async function getBlogPosts(locale: string) {
  const blogDirectory = getBlogDirectory(locale);
  const files = await fs.readdir(blogDirectory);

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
        };
      })
  );

  return posts;
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
    content,
  };
}
