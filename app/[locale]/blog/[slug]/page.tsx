import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/blog";
import { getBaseUrl } from "@/lib/seo";
import SiteFooter from "@/components/SiteFooter";

type LocaleBlogPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: LocaleBlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const post = await getBlogPostBySlug(safeLocale, slug);
  const baseUrl = getBaseUrl();

  const alternateSlug = safeLocale === "ro" ? "first-article" : "primul-articol";

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${baseUrl}/${safeLocale}/blog/${slug}`,
      languages: {
        ro: `${baseUrl}/ro/blog/${safeLocale === "ro" ? slug : alternateSlug}`,
        en: `${baseUrl}/en/blog/${safeLocale === "en" ? slug : alternateSlug}`,
      },
    },
  };
}

export default async function LocaleBlogPostPage({ params }: LocaleBlogPostPageProps) {
  const { locale, slug } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const post = await getBlogPostBySlug(safeLocale, slug);
  const relatedPosts = await getRelatedBlogPosts(safeLocale, slug);

  return (
    <main>
      <nav className="topbar">
        <div className="logo">
          <Image
            src="/logo-blue.svg"
            alt="ALPHACONT GROUP logo"
            className="logo-image"
            width={240}
            height={66}
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

      <section className="hero">
        <h1>{post.title}</h1>
        <p className="hero-lead">{post.description}</p>
        <p className="blog-date">{post.formattedDate}</p>
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
        <ReactMarkdown>{post.content}</ReactMarkdown>
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
