import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/blog";
import { getBaseUrl } from "@/lib/seo";
import SiteFooter from "@/components/SiteFooter";

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
    metadataBase: new URL(baseUrl),
    title:
      safeLocale === "ro"
        ? "Resurse fiscal-contabile | Contabilitate Sibiu | ALPHACONT GROUP"
        : "Accounting & tax resources | Accounting Sibiu | ALPHACONT GROUP",
    description:
      safeLocale === "ro"
        ? "Articole utile despre contabilitate, fiscalitate, SRL, PFA, taxe, documente și monografii contabile pentru firme din Sibiu."
        : "Useful articles about accounting, tax, LLCs, sole traders, payroll, and accounting case studies for businesses in Sibiu.",
    keywords:
      safeLocale === "ro"
        ? [
            "resurse fiscal contabile",
            "monografii contabile",
            "contabilitate sibiu",
            "taxe srl",
            "taxe pfa",
            "documente contabilitate",
            "fiscalitate romania",
          ]
        : [
            "accounting resources",
            "accounting case studies",
            "accounting sibiu",
            "tax romania",
            "payroll sibiu",
          ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${safeLocale}/blog`,
      languages: {
        ro: `${baseUrl}/ro/blog`,
        en: `${baseUrl}/en/blog`,
      },
    },
    openGraph: {
      title:
        safeLocale === "ro"
          ? "Resurse fiscal-contabile | ALPHACONT GROUP"
          : "Accounting & tax resources | ALPHACONT GROUP",
      description:
        safeLocale === "ro"
          ? "Articole și monografii contabile pentru firme din Sibiu."
          : "Articles and accounting case studies for businesses in Sibiu.",
      url: `${baseUrl}/${safeLocale}/blog`,
      siteName: "ALPHACONT GROUP",
      locale: safeLocale === "ro" ? "ro_RO" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/hero-office.jpg",
          width: 1200,
          height: 630,
          alt: "ALPHACONT GROUP - Resurse fiscal-contabile",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        safeLocale === "ro"
          ? "Resurse fiscal-contabile | ALPHACONT GROUP"
          : "Accounting & tax resources | ALPHACONT GROUP",
      description:
        safeLocale === "ro"
          ? "Articole și monografii contabile pentru firme din Sibiu."
          : "Articles and accounting case studies for businesses in Sibiu.",
      images: ["/images/hero-office.jpg"],
    },
  };
}

export default async function LocaleBlogPage({ params }: LocaleBlogPageProps) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const allPosts = await getBlogPosts(safeLocale);

  const monografiiPosts = allPosts.filter((post) => {
    const category = post.category?.toLowerCase?.() ?? "";
    return category === "monografii contabile";
  });

  const resourcePosts = allPosts.filter((post) => {
    const title = post.title?.toLowerCase?.() ?? "";
    const description = post.description?.toLowerCase?.() ?? "";
    const category = post.category?.toLowerCase?.() ?? "";
    const tags = (post.tags ?? []).map((tag) => tag.toLowerCase());

    const isAnafOnly =
      title.includes("anaf") ||
      description.includes("anaf") ||
      category.includes("anaf") ||
      tags.some((tag) => tag.includes("anaf"));

    const isMonografie = category === "monografii contabile";

    const isFiscalAccountingResource = [
      "contabilitate",
      "fiscalitate",
      "taxe",
      "srl",
      "pfa",
      "documente",
      "salarizare",
      "declara",
      "impozit",
      "tva",
    ].some(
      (term) =>
        title.includes(term) ||
        description.includes(term) ||
        category.includes(term) ||
        tags.some((tag) => tag.includes(term)),
    );

    return isFiscalAccountingResource && !isAnafOnly && !isMonografie;
  });

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
              {safeLocale === "ro"
                ? "Resurse fiscal-contabile"
                : "Accounting & tax resources"}
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
        <h1>
          {safeLocale === "ro" ? "Resurse fiscal-contabile" : "Accounting & tax resources"}
        </h1>
        <p className="hero-lead">
          {safeLocale === "ro"
            ? "Articole utile despre contabilitate, fiscalitate, SRL, PFA, taxe și organizarea documentelor pentru firme."
            : "Useful articles about accounting, tax, LLCs, sole traders, business taxes, and document organization."}
        </p>
      </section>

      <section className="content-section">
        <div className="section-header">
          <p className="section-kicker">
            {safeLocale === "ro" ? "Resurse fiscal-contabile" : "Accounting & tax resources"}
          </p>
          <h2>{safeLocale === "ro" ? "Articole disponibile" : "Available articles"}</h2>
        </div>
        <div className="blog-index-grid">
          {resourcePosts.map((post) => (
            <article key={post.slug} className="blog-index-card">
              <small className="blog-date">{post.formattedDate}</small>
              <Link href={`/${safeLocale}/blog/${post.slug}`} className="blog-card-link">
                {post.title}
              </Link>
              <p className="blog-description">{post.description}</p>
            </article>
          ))}
        </div>

        {monografiiPosts.length > 0 && (
          <div className="monografii-subsection">
            <div className="section-header">
              <p className="section-kicker">
                {safeLocale === "ro" ? "Monografii contabile" : "Accounting case studies"}
              </p>
              <h2>
                {safeLocale === "ro" ? "Monografii contabile" : "Accounting case studies"}
              </h2>
            </div>

            <div className="blog-index-grid">
              {monografiiPosts.map((post) => (
                <article key={post.slug} className="blog-index-card">
                  <small className="blog-date">{post.formattedDate}</small>
                  <Link href={`/${safeLocale}/blog/${post.slug}`} className="blog-card-link">
                    {post.title}
                  </Link>
                  <p className="blog-description">{post.description}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      <SiteFooter locale={safeLocale} />
    </main>
  );
}
