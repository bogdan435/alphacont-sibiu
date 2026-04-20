import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import { getBaseUrl } from "@/lib/seo";
import { getHomeContent } from "@/lib/home";
import { getServicePageContent, servicePageSlugs } from "@/lib/service-pages";

type ServicePageProps = {
  params: Promise<{ locale: string; serviceSlug: string }>;
};

export function generateStaticParams() {
  return servicePageSlugs.map((serviceSlug) => ({ serviceSlug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { locale, serviceSlug } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const page = getServicePageContent(safeLocale, serviceSlug);

  if (!page) {
    return {};
  }

  const baseUrl = getBaseUrl();

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords:
      safeLocale === "ro"
        ? [
            page.title.toLowerCase(),
            "contabil sibiu",
            "firma contabilitate sibiu",
            "servicii contabilitate sibiu",
            "expert contabil sibiu",
          ]
        : ["accounting services Sibiu", "Sibiu accountant", "payroll Sibiu"],
    alternates: {
      canonical: `${baseUrl}/${safeLocale}/${serviceSlug}`,
      languages: {
        ro: `${baseUrl}/ro/${serviceSlug}`,
        en: `${baseUrl}/en/${serviceSlug}`,
      },
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { locale, serviceSlug } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const page = getServicePageContent(safeLocale, serviceSlug);
  const homeContent = getHomeContent(safeLocale);

  if (!page) {
    notFound();
  }

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
            <a href="#contact">Contact</a>
          </div>
          <div className="language-switch" aria-label="Language switch">
            <Link
              href={`/ro/${serviceSlug}`}
              className={safeLocale === "ro" ? "language-link is-active" : "language-link"}
            >
              RO
            </Link>
            <Link
              href={`/en/${serviceSlug}`}
              className={safeLocale === "en" ? "language-link is-active" : "language-link"}
            >
              EN
            </Link>
          </div>
        </div>
      </nav>

      <section className="hero service-page-hero">
        <div className="hero-copy">
          <h1>{page.title}</h1>
          <p className="hero-lead">{page.intro}</p>
          <p className="hero-summary">{page.summary}</p>
          <div className="hero-actions">
            <a href={`mailto:${homeContent.contactEmail}`} className="button">
              {page.ctaLabel}
            </a>
            <a
              href={`https://wa.me/${homeContent.whatsappNumber}`}
              className="button button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {safeLocale === "ro" ? "Discută pe WhatsApp" : "Chat on WhatsApp"}
            </a>
          </div>
        </div>
      </section>

      <section className="content-section service-content-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "Servicii locale" : "Local services"}
            </p>
            <h2>
              {safeLocale === "ro"
                ? "Ce primești concret"
                : "What you get in practice"}
            </h2>
          </div>
        </div>
        <ul className="complexity-list">
          {page.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="content-section service-cta-section">
        <div className="service-cta-layout">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>
              {safeLocale === "ro"
                ? "Spune-ne pe scurt cum arată firma ta"
                : "Tell us briefly what your business looks like"}
            </h2>
            <p className="service-cta-copy">
              {safeLocale === "ro"
                ? "Îți trimitem o ofertă clară după câteva detalii despre activitate, volum și ce tip de sprijin ai nevoie."
                : "We send you a clear quote after a few details about your activity, volume, and the support you need."}
            </p>
          </div>
          <div className="service-cta-actions">
            <a href={`mailto:${homeContent.contactEmail}`} className="button contact-button-primary">
              {page.ctaLabel}
            </a>
            <a
              href={`https://wa.me/${homeContent.whatsappNumber}`}
              className="contact-secondary-link whatsapp-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {safeLocale === "ro" ? "Scrie pe WhatsApp" : "Message on WhatsApp"}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter locale={safeLocale} />
    </main>
  );
}
