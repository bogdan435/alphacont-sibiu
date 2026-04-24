import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import { getBaseUrl } from "@/lib/seo";
import { getHomeContent } from "@/lib/home";
import {
  getAlternateServicePageSlug,
  getServicePageContent,
  getServicePageLinks,
  servicePageSlugs,
} from "@/lib/service-pages";

type ServicePageProps = {
  params: Promise<{ locale: string; serviceSlug: string }>;
};

export function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  const safeLocale = params.locale === "en" ? "en" : "ro";

  return servicePageSlugs[safeLocale].map((serviceSlug) => ({ serviceSlug }));
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
  const roSlug = getAlternateServicePageSlug(safeLocale, serviceSlug, "ro");
  const enSlug = getAlternateServicePageSlug(safeLocale, serviceSlug, "en");

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
        : [
            page.title,
            "English speaking accountant Sibiu",
            "accountant in Sibiu",
            "accounting services Sibiu",
            "accounting services Romania",
            "tax advisor Romania",
            "payroll services Romania",
            "company formation Romania",
          ],
    alternates: {
      canonical: `${baseUrl}/${safeLocale}/${serviceSlug}`,
      languages: {
        ro: `${baseUrl}/ro/${roSlug}`,
        en: `${baseUrl}/en/${enSlug}`,
      },
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${baseUrl}/${safeLocale}/${serviceSlug}`,
      siteName: "ALPHACONT GROUP",
      locale: safeLocale === "ro" ? "ro_RO" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { locale, serviceSlug } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const page = getServicePageContent(safeLocale, serviceSlug);
  const homeContent = getHomeContent(safeLocale);
  const serviceLinks = getServicePageLinks(safeLocale).filter(
    (link) => link.href !== `/${safeLocale}/${serviceSlug}`,
  );
  const roSlug = getAlternateServicePageSlug(safeLocale, serviceSlug, "ro");
  const enSlug = getAlternateServicePageSlug(safeLocale, serviceSlug, "en");

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
            <a href="#contact">Contact</a>
          </div>
          <div className="language-switch" aria-label="Language switch">
            <Link
              href={`/ro/${roSlug}`}
              className={safeLocale === "ro" ? "language-link is-active" : "language-link"}
            >
              RO
            </Link>
            <Link
              href={`/en/${enSlug}`}
              className={safeLocale === "en" ? "language-link is-active" : "language-link"}
            >
              EN
            </Link>
          </div>
        </div>
      </nav>

      <section className="service-page-hero service-hero-light">
        <div className="hero-copy">
          <p className="hero-badge">
            {safeLocale === "ro"
              ? "Servicii contabile în Sibiu"
              : "English-speaking accounting services in Sibiu"}
          </p>
          <h1>{page.title}</h1>
          <p className="hero-lead">{page.intro}</p>
          <p className="hero-summary">{page.summary}</p>
          <div className="hero-actions">
            <a href={`mailto:${homeContent.contactEmail}`} className="button">
              {page.ctaLabel}
            </a>
            <a
              href={`https://wa.me/${homeContent.whatsappNumber}`}
              className="button-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💬</span>
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

      <section className="content-section service-related-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "Alte servicii" : "Related services"}
            </p>
            <h2>
              {safeLocale === "ro"
                ? "Servicii contabile conexe"
                : "Related accounting services"}
            </h2>
          </div>
        </div>

        <div className="seo-service-links-list">
          {serviceLinks.map((link) => (
            <Link key={link.href} href={link.href} className="seo-service-link">
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="content-section service-cta-section">
        <div className="service-cta-layout">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>
              {safeLocale === "ro"
                ? "Spune-ne pe scurt cum arată firma ta"
                : "Tell us what accounting support you need"}
            </h2>
            <p className="service-cta-copy">
              {safeLocale === "ro"
                ? "Îți trimitem o ofertă clară după câteva detalii despre activitate, volum și ce tip de sprijin ai nevoie."
                : "Send us a few details about your business, document volume, payroll needs, or tax situation. We will reply with the next steps and a clear quote."}
            </p>
          </div>
          <div className="service-cta-actions">
            <a href={`mailto:${homeContent.contactEmail}`} className="button contact-button-primary">
              {page.ctaLabel}
            </a>
            <a
              href={`https://wa.me/${homeContent.whatsappNumber}`}
              className="button-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💬</span>
              {safeLocale === "ro" ? "Scrie pe WhatsApp" : "Message on WhatsApp"}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter locale={safeLocale} />
    </main>
  );
}
