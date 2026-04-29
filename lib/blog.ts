import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

const hiddenBlogSlugs = new Set(["first-article", "primul-articol"]);

const blogSlugPairs = [
  {
    ro: "acte-necesare-srl",
    en: "documents-needed-for-an-llc",
  },
  {
    ro: "beneficiile-unui-partener-contabil",
    en: "benefits-of-an-accounting-partner-for-a-growing-business",
  },
  {
    ro: "cand-externalizezi-contabilitatea",
    en: "when-to-outsource-accounting",
  },
  {
    ro: "cat-costa-un-contabil-in-sibiu",
    en: "how-much-does-an-accountant-cost-in-sibiu",
  },
  {
    ro: "ce-taxe-plateste-un-srl-in-romania",
    en: "what-taxes-does-an-llc-pay-in-romania",
  },
  {
    ro: "contabilitate-pfa-sibiu",
    en: "accounting-for-pfa-sibiu",
  },
  {
    ro: "cum-te-pregatesti-pentru-anaf",
    en: "how-to-prepare-for-anaf-checks",
  },
  {
    ro: "declaratii-fiscale-firma-mica",
    en: "tax-returns-for-a-small-business",
  },
  {
    ro: "greseli-contabile-frecvente",
    en: "common-accounting-mistakes-in-small-businesses",
  },
  {
    ro: "salarizare-pentru-angajatori-mici",
    en: "payroll-for-small-employers",
  },
  {
    ro: "srl-sau-pfa-in-2026-ce-alegi",
    en: "srl-or-pfa-in-2026-which-one-to-choose",
  },
] as const;

const roToEnBlogSlug = Object.fromEntries(
  blogSlugPairs.map(({ ro, en }) => [ro, en]),
) as Record<string, string>;

const enToRoBlogSlug = Object.fromEntries(
  blogSlugPairs.map(({ ro, en }) => [en, ro]),
) as Record<string, string>;

function isHiddenBlogSlug(slug: string) {
  return hiddenBlogSlugs.has(slug);
}

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
      .filter((file) => !isHiddenBlogSlug(file.replace(".md", "")))
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
  if (isHiddenBlogSlug(slug)) {
    return null;
  }

  try {
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
  } catch (error) {
    console.error("Blog load error:", slug, error);
    return null;
  }
}

export async function getRelatedBlogPosts(locale: string, currentSlug: string) {
  const posts = await getBlogPosts(locale);
  return posts.filter((post) => post.slug !== currentSlug).slice(0, 3);
}

export function getAlternateBlogSlug(
  locale: string,
  slug: string,
  targetLocale: string,
) {
  const safeLocale = locale === "en" ? "en" : "ro";
  const safeTargetLocale = targetLocale === "en" ? "en" : "ro";

  if (isHiddenBlogSlug(slug)) {
    return null;
  }

  if (safeLocale === safeTargetLocale) {
    return slug;
  }

  if (safeLocale === "ro") {
    return roToEnBlogSlug[slug] ?? null;
  }

  return enToRoBlogSlug[slug] ?? null;
}
