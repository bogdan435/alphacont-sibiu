import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/blog";
import { getBaseUrl } from "@/lib/seo";
import SiteFooter from "@/components/SiteFooter";
import { getHomeContent } from "@/lib/home";

type LocaleBlogPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocaleBlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const baseUrl = getBaseUrl();

  return {
    title:
      safeLocale === "ro"
        ? "ANAF ne informează | ALPHACONT GROUP"
        : "ANAF updates | ALPHACONT GROUP",
    description:
      safeLocale === "ro"
        ? "Informări și clarificări utile despre contabilitate, fiscalitate și salarizare pentru firme din Sibiu."
        : "Useful updates and clarifications about accounting, tax, and payroll for businesses in Sibiu.",
    alternates: {
      canonical: `${baseUrl}/${safeLocale}/blog`,
      languages: {
        ro: `${baseUrl}/ro/blog`,
        en: `${baseUrl}/en/blog`,
      },
    },
  };
}

export default async function LocaleBlogPage({ params }: LocaleBlogPageProps) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const posts = await getBlogPosts(safeLocale);
  const homeContent = getHomeContent(safeLocale);

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

      <section className="hero blog-hero">
        <h1>{safeLocale === "ro" ? "ANAF ne informează" : "ANAF updates"}</h1>
        <p className="hero-lead">
          {safeLocale === "ro"
            ? "Noutăți și clarificări utile pentru antreprenori, PFA-uri și firme din Sibiu."
            : "Useful updates and clarifications for entrepreneurs, sole traders, and companies in Sibiu."}
        </p>
        <a
          href={homeContent.anafLinkUrl}
          className="button"
          target="_blank"
          rel="noreferrer"
        >
          {homeContent.anafLinkLabel}
        </a>
        <a
          href={homeContent.anafLinkSecondaryUrl}
          className="button button-secondary"
          target="_blank"
          rel="noreferrer"
        >
          {homeContent.anafLinkSecondaryLabel}
        </a>
        <a
          href={homeContent.anafLinkThirdUrl}
          className="button button-secondary"
          target="_blank"
          rel="noreferrer"
        >
          {homeContent.anafLinkThirdLabel}
        </a>
        <a
          href={homeContent.anafLinkFourthUrl}
          className="button button-secondary"
          target="_blank"
          rel="noreferrer"
        >
          {homeContent.anafLinkFourthLabel}
        </a>
      </section>

      <section className="content-section">
        <div className="section-header">
          <p className="section-kicker">
            {safeLocale === "ro" ? "ANAF ne informează" : "ANAF updates"}
          </p>
          <h2>{safeLocale === "ro" ? "Informări disponibile" : "Available updates"}</h2>
        </div>
        <div className="blog-index-grid">
          {posts.map((post) => (
            <article key={post.slug} className="blog-index-card">
              <small className="blog-date">{post.formattedDate}</small>
              <Link href={`/${safeLocale}/blog/${post.slug}`} className="blog-card-link">
                {post.title}
              </Link>
              <p className="blog-description">{post.description}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter locale={safeLocale} />
    </main>
  );
}
