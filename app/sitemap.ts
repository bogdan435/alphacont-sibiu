import { execFile } from "node:child_process";
import { promisify } from "node:util";
import type { MetadataRoute } from "next";
import { getBlogPosts } from "../lib/blog";
import { servicePageSlugs } from "../lib/service-pages";

const execFileAsync = promisify(execFile);

const baseUrl = "https://alphacont.ro";
const fallbackLastModified = new Date().toISOString().split("T")[0];

type SitemapSourceEntry = {
  url: string;
  sourcePaths: string[];
};

const lastModifiedCache = new Map<string, Promise<string>>();

function getStaticEntries(): SitemapSourceEntry[] {
  return [
    {
      url: `${baseUrl}/ro`,
      sourcePaths: ["app/[locale]/page.tsx", "content/home-ro.ts", "lib/home.ts"],
    },
    {
      url: `${baseUrl}/en`,
      sourcePaths: ["app/[locale]/page.tsx", "content/home-en.ts", "lib/home.ts"],
    },
    {
      url: `${baseUrl}/ro/anaf`,
      sourcePaths: ["app/[locale]/anaf/page.tsx"],
    },
    {
      url: `${baseUrl}/en/anaf`,
      sourcePaths: ["app/[locale]/anaf/page.tsx"],
    },
    {
      url: `${baseUrl}/ro/confidentialitate`,
      sourcePaths: ["app/ro/confidentialitate/page.tsx"],
    },
    {
      url: `${baseUrl}/en/privacy-policy`,
      sourcePaths: ["app/[locale]/privacy-policy/page.tsx"],
    },
    {
      url: `${baseUrl}/ro/cookie-uri`,
      sourcePaths: ["app/ro/cookie-uri/page.tsx"],
    },
    {
      url: `${baseUrl}/en/cookie-policy`,
      sourcePaths: ["app/[locale]/cookie-policy/page.tsx"],
    },
    {
      url: `${baseUrl}/ro/termeni`,
      sourcePaths: ["app/ro/termeni/page.tsx"],
    },
    {
      url: `${baseUrl}/en/terms`,
      sourcePaths: ["app/[locale]/terms/page.tsx"],
    },
    {
      url: `${baseUrl}/ro/stagiu-practica`,
      sourcePaths: ["app/ro/stagiu-practica/page.tsx"],
    },
    {
      url: `${baseUrl}/ro/servicii`,
      sourcePaths: ["app/ro/servicii/page.tsx", "lib/service-pages.ts"],
    },
    {
      url: `${baseUrl}/en/services`,
      sourcePaths: ["app/[locale]/services/page.tsx", "lib/service-pages.ts"],
    },
    {
      url: `${baseUrl}/ro/recomandari`,
      sourcePaths: ["app/[locale]/recomandari/page.tsx"],
    },
    {
      url: `${baseUrl}/en/recommendations`,
      sourcePaths: ["app/en/recommendations/page.tsx"],
    },
    {
      url: `${baseUrl}/ro/blog`,
      sourcePaths: ["app/[locale]/blog/page.tsx", "lib/blog.ts", "content/blog/ro"],
    },
    {
      url: `${baseUrl}/en/blog`,
      sourcePaths: ["app/[locale]/blog/page.tsx", "lib/blog.ts", "content/blog/en"],
    },
  ];
}

function getCachedLastModified(sourcePaths: string[]) {
  const cacheKey = sourcePaths.join("|");

  if (!lastModifiedCache.has(cacheKey)) {
    lastModifiedCache.set(cacheKey, readLastModifiedFromGit(sourcePaths));
  }

  return lastModifiedCache.get(cacheKey)!;
}

async function readLastModifiedFromGit(sourcePaths: string[]) {
  try {
    const { stdout } = await execFileAsync(
      "git",
      ["log", "-1", "--format=%cI", "--", ...sourcePaths],
      { cwd: process.cwd() },
    );

    const gitDate = stdout.trim();

    if (gitDate) {
      return gitDate;
    }
  } catch {
    // Fall back to a stable date if git metadata is unavailable in the build context.
  }

  return fallbackLastModified;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = getStaticEntries();

  for (const slug of servicePageSlugs.ro) {
    entries.push({
      url: `${baseUrl}/ro/${slug}`,
      sourcePaths: ["app/[locale]/[serviceSlug]/page.tsx", "lib/service-pages.ts"],
    });
  }

  for (const slug of servicePageSlugs.en) {
    entries.push({
      url: `${baseUrl}/en/${slug}`,
      sourcePaths: ["app/[locale]/[serviceSlug]/page.tsx", "lib/service-pages.ts"],
    });
  }

  const [blogEn, blogRo] = await Promise.all([getBlogPosts("en"), getBlogPosts("ro")]);

  for (const post of blogEn) {
    entries.push({
      url: `${baseUrl}/en/blog/${post.slug}`,
      sourcePaths: [
        "app/[locale]/blog/[slug]/page.tsx",
        "lib/blog.ts",
        `content/blog/en/${post.slug}.md`,
      ],
    });
  }

  for (const post of blogRo) {
    entries.push({
      url: `${baseUrl}/ro/blog/${post.slug}`,
      sourcePaths: [
        "app/[locale]/blog/[slug]/page.tsx",
        "lib/blog.ts",
        `content/blog/ro/${post.slug}.md`,
      ],
    });
  }

  return Promise.all(
    entries.map(async ({ url, sourcePaths }) => ({
      url,
      lastModified: await getCachedLastModified(sourcePaths),
    })),
  );
}
