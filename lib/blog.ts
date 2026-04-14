import { promises as fs } from "fs";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content/blog/ro");

export async function getBlogPosts() {
  const files = await fs.readdir(blogDirectory);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
      title: file.replace(".md", "").replace(/-/g, " "),
    }));
}

export async function getBlogPostBySlug(slug: string) {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const content = await fs.readFile(fullPath, "utf8");

  return {
    slug,
    content,
  };
}
