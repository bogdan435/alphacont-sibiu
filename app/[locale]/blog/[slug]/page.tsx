import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import {
  getAlternateBlogSlug,
  getBlogPostBySlug,
  getBlogPosts,
  getRelatedBlogPosts,
} from "@/lib/blog";
import { getBaseUrl } from "@/lib/seo";
import { getAlternateServicePageSlug, getServicePageLinks } from "@/lib/service-pages";
import SiteFooter from "@/components/SiteFooter";

type LocaleBlogPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

type ResourceLink = {
  href: string;
  label: string;
};

export async function generateStaticParams() {
  const blogEn = await getBlogPosts("en");
  const blogRo = await getBlogPosts("ro");

  return [
    ...blogEn.map((post) => ({
      locale: "en",
      slug: post.slug,
    })),
    ...blogRo.map((post) => ({
      locale: "ro",
      slug: post.slug,
    })),
  ];
}

function getUsefulServiceSlugs(slug: string, category: string) {
  const normalized = `${slug} ${category}`.toLowerCase();

  if (
    normalized.includes("company") ||
    normalized.includes("firma") ||
    normalized.includes("srl") ||
    normalized.includes("llc")
  ) {
    return ["infiintare-firma-sibiu", "contabil-srl-sibiu"];
  }

  if (normalized.includes("freelancer") || normalized.includes("pfa")) {
    return ["contabil-pfa-sibiu", "consultanta-fiscala-sibiu"];
  }

  if (
    normalized.includes("vat") ||
    normalized.includes("tax") ||
    normalized.includes("fiscal")
  ) {
    return ["consultanta-fiscala-sibiu", "contabil-srl-sibiu"];
  }

  if (normalized.includes("payroll") || normalized.includes("salarizare")) {
    return ["salarizare-sibiu", "contabil-srl-sibiu"];
  }

  return ["contabil-srl-sibiu", "contabil-pfa-sibiu"];
}

function getUsefulServiceLinks(locale: string, slug: string, category: string): ResourceLink[] {
  const safeLocale = locale === "en" ? "en" : "ro";
  const serviceLinks = getServicePageLinks(safeLocale);
  const serviceSlugs = getUsefulServiceSlugs(slug, category).map((serviceSlug) =>
    safeLocale === "en"
      ? getAlternateServicePageSlug("ro", serviceSlug, "en")
      : serviceSlug,
  );

  return serviceSlugs
    .map((serviceSlug) => serviceLinks.find((link) => link.href === `/${safeLocale}/${serviceSlug}`))
    .filter((link): link is ResourceLink => Boolean(link));
}

export async function generateMetadata({
  params,
}: LocaleBlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const post = await getBlogPostBySlug(safeLocale, slug);
  const baseUrl = getBaseUrl();

  if (!post) {
    return {};
  }

  const roAlternateSlug = getAlternateBlogSlug(safeLocale, slug, "ro");
  const enAlternateSlug = getAlternateBlogSlug(safeLocale, slug, "en");

  return {
    metadataBase: new URL(baseUrl),
    title: `${post.title} | ALPHACONT GROUP`,
    description: post.description,
    keywords: [
      post.category,
      ...(post.tags ?? []),
      safeLocale === "ro" ? "contabilitate sibiu" : "accounting sibiu",
    ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${safeLocale}/blog/${slug}`,
      languages: {
        ...(roAlternateSlug ? { ro: `${baseUrl}/ro/blog/${roAlternateSlug}` } : {}),
        ...(enAlternateSlug ? { en: `${baseUrl}/en/blog/${enAlternateSlug}` } : {}),
      },
    },
    openGraph: {
      title: `${post.title} | ALPHACONT GROUP`,
      description: post.description,
      url: `${baseUrl}/${safeLocale}/blog/${slug}`,
      siteName: "ALPHACONT GROUP",
      locale: safeLocale === "ro" ? "ro_RO" : "en_US",
      type: "article",
      images: [
        {
          url: "/images/hero-office-optimized.webp",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ALPHACONT GROUP`,
      description: post.description,
      images: ["/images/hero-office-optimized.webp"],
    },
  };
}

export default async function LocaleBlogPostPage({ params }: LocaleBlogPostPageProps) {
  const { locale, slug } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const post = await getBlogPostBySlug(safeLocale, slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedBlogPosts(safeLocale, slug);
  const usefulServiceLinks = getUsefulServiceLinks(safeLocale, post.slug, post.category);
  const usefulArticleLinks: ResourceLink[] = relatedPosts.slice(0, 2).map((relatedPost) => ({
    href: `/${safeLocale}/blog/${relatedPost.slug}`,
    label: relatedPost.title,
  }));
  const usefulLinks = [...usefulServiceLinks, ...usefulArticleLinks];

  return (
    <main className="site-shell">
      <nav className="topbar">
        <div className="logo">
          <Image
            src="/logo-blue.svg"
            alt="ALPHACONT GROUP logo"
            className="logo-image"
            width={240}
            height={66}
            priority
          />
          <div className="logo-support">
            <span>
              {safeLocale === "ro" ? "Contabilitate & Fiscalitate" : "Accounting & Tax"}
            </span>
          </div>
        </div>
        <div className="topbar-right">
          <div className="nav-links">
            <Link href={`/${safeLocale}`}>{safeLocale === "ro" ? "Acasă" : "Home"}</Link>
            <Link href={`/${safeLocale}/blog`}>
              {safeLocale === "ro" ? "ANAF ne informează" : "ANAF updates"}
            </Link>
          </div>
          <div className="language-switch" aria-label="Language switch">
            <Link
              href="/ro/blog"
              className={safeLocale === "ro" ? "language-link is-active" : "language-link"}
            >
              RO
            </Link>
            <Link
              href="/en/blog"
              className={safeLocale === "en" ? "language-link is-active" : "language-link"}
            >
              EN
            </Link>
          </div>
        </div>
      </nav>

      <section className="article-hero">
        <div className="article-hero-head">
          <p className="blog-date">{post.formattedDate}</p>
          <h1>{post.title}</h1>
        </div>

        <p className="article-hero-lead">{post.description}</p>
        <div className="post-meta">
          <span className="post-category">{post.category}</span>
          <div className="post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="post-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="article-content">
        <ReactMarkdown
          components={{
            h1: () => null,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </section>

      <section className="article-content">
        <h2>{safeLocale === "ro" ? "Resurse utile" : "Useful resources"}</h2>
        <ul>
          {usefulLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="section-header">
          <p className="section-kicker">
            {safeLocale === "ro" ? "ANAF ne informează" : "ANAF updates"}
          </p>
          <h2>{safeLocale === "ro" ? "Informări similare" : "Related updates"}</h2>
        </div>
        <ul className="blog-list">
          {relatedPosts.map((relatedPost) => (
            <li key={relatedPost.slug}>
              <Link
                href={`/${safeLocale}/blog/${relatedPost.slug}`}
                className="blog-card-link"
              >
                {relatedPost.title}
              </Link>
              <p className="blog-description">{relatedPost.description}</p>
              <small className="blog-date">{relatedPost.formattedDate}</small>
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter locale={safeLocale} />
    </main>
  );
}
