import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { getHomeContent } from "@/lib/home";
import { getBaseUrl, getLocaleMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/blog";
import { getFaqSchema, getLocalBusinessSchema } from "@/lib/schema";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const metadata = getLocaleMetadata(safeLocale);
  const baseUrl = getBaseUrl();

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `${baseUrl}/${safeLocale}`,
      languages: {
        ro: `${baseUrl}/ro`,
        en: `${baseUrl}/en`,
      },
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const homeContent = getHomeContent(safeLocale);
  const latestPosts = (await getBlogPosts(safeLocale)).slice(0, 3);
  const [featuredPost, ...secondaryPosts] = latestPosts;
  const localBusinessSchema = getLocalBusinessSchema(safeLocale);
  const faqSchema = getFaqSchema(homeContent.faqs);

  const primaryPhoneDisplay = "+40 721 644 296";
  const secondaryPhoneDisplay = "+39 334 741 2487";

  const trustItems =
    safeLocale === "ro"
      ? ["SRL-uri", "PFA-uri", "Salarizare", "Fiscalitate"]
      : ["Sibiu", "Accounting", "Payroll", "Tax"];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

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
            <a href="#services">{safeLocale === "ro" ? "Servicii" : "Services"}</a>
            <a href="#why">{safeLocale === "ro" ? "Avantaje" : "Benefits"}</a>
            <Link href={`/${safeLocale}/blog`}>Blog</Link>
            <a href="#contact">Contact</a>
          </div>
          <div className="language-switch" aria-label="Language switch">
            <Link
              href="/ro"
              className={safeLocale === "ro" ? "language-link is-active" : "language-link"}
            >
              RO
            </Link>
            <Link
              href="/en"
              className={safeLocale === "en" ? "language-link is-active" : "language-link"}
            >
              EN
            </Link>
          </div>
        </div>
      </nav>

      <section className="hero hero-redesign">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-badge">{homeContent.heroBadge}</p>
            <h1>{homeContent.heroTitle}</h1>
            <p className="hero-lead">{homeContent.heroText}</p>
            <p className="hero-summary">{homeContent.heroSubtext}</p>
            <div className="hero-actions">
              <a href="#contact" className="button">
                {homeContent.heroButton}
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <p className="section-kicker hero-panel-kicker">
              {safeLocale === "ro" ? "Sprijin local" : "Local support"}
            </p>
            <p className="hero-panel-text">
              {safeLocale === "ro"
                ? "Lucrăm direct și clar pentru firme care vor să știe ce taxe urmează, cum se organizează documentele și ce au de făcut mai departe."
                : "We work in a direct and practical way for businesses that want clarity around documents, tax deadlines, and next steps."}
            </p>
            <div className="trust-list">
              {trustItems.map((item) => (
                <span key={item} className="trust-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="content-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "Servicii" : "Services"}
            </p>
            <SectionTitle title={homeContent.servicesTitle} />
          </div>
          <p className="split-copy">
            {safeLocale === "ro"
              ? "Contabilitate, salarizare și consultanță fiscală pentru firme care au nevoie de mai multă ordine și de decizii mai sigure."
              : "Accounting, payroll, and tax advisory for businesses that need better structure and clearer decisions."}
          </p>
        </div>
        <div className="services-grid">
          {homeContent.services.map((service, index) => (
            <article key={service} className="service-card">
              <span className="service-number">0{index + 1}</span>
              <p>{service}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="why" className="content-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "De ce ALPHACONT GROUP" : "Why ALPHACONT GROUP"}
            </p>
            <SectionTitle title={homeContent.whyTitle} />
          </div>
          <p className="split-copy">
            {safeLocale === "ro"
              ? "Mai puține explicații complicate și mai multă claritate practică pentru documente, salarii și obligații fiscale."
              : "Less unnecessary complexity, more practical clarity for the financial side of your business."}
          </p>
        </div>
        <div className="benefit-grid">
          {homeContent.whyItems.map((item) => (
            <article key={item} className="benefit-card">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">Blog</p>
            <SectionTitle title={homeContent.latestArticlesTitle} />
          </div>
          <div className="blog-section-copy">
            <p className="split-copy">
              {safeLocale === "ro"
                ? "Articole scurte și practice pentru PFA-uri, SRL-uri și firme care vor să înțeleagă mai bine obligațiile contabile și fiscale."
                : "Short, practical articles for sole traders and companies that want to better understand accounting and tax obligations."}
            </p>
            <Link href={`/${safeLocale}/blog`} className="blog-section-link">
              {safeLocale === "ro" ? "Vezi toate articolele" : "See all articles"}
            </Link>
          </div>
        </div>

        {featuredPost ? (
          <div className="blog-preview-layout">
            <article className="featured-article">
              <small className="blog-date">{featuredPost.formattedDate}</small>
              <Link
                href={`/${safeLocale}/blog/${featuredPost.slug}`}
                className="featured-article-link"
              >
                {featuredPost.title}
              </Link>
              <p className="featured-article-copy">{featuredPost.description}</p>
            </article>

            <div className="secondary-articles">
              {secondaryPosts.map((post) => (
                <article key={post.slug} className="secondary-article">
                  <small className="blog-date">{post.formattedDate}</small>
                  <Link
                    href={`/${safeLocale}/blog/${post.slug}`}
                    className="secondary-article-link"
                  >
                    {post.title}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section className="content-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">FAQ</p>
            <SectionTitle title={homeContent.faqTitle} />
          </div>
          <p className="split-copy">
            {safeLocale === "ro"
              ? "Câteva răspunsuri rapide pentru întrebările care apar cel mai des la începutul unei colaborări."
              : "A few quick answers to the questions that appear most often at the start of a collaboration."}
          </p>
        </div>
        <div className="faq-list">
          {homeContent.faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section contact-redesign">
        <div className="contact-layout">
          <div className="contact-copy">
            <p className="section-kicker">Contact</p>
            <p className="contact-urgency">
              {safeLocale === "ro" ? "Răspuns rapid" : "Fast response"}
            </p>
            <SectionTitle
              title={
                safeLocale === "ro"
                  ? "Hai să discutăm despre firma ta"
                  : "Let’s talk about your business"
              }
            />
            <p className="contact-lead">
              {safeLocale === "ro"
                ? "Dacă ai nevoie de sprijin pentru contabilitate, salarizare sau fiscalitate, ne poți scrie direct și îți răspundem rapid."
                : "If you need support with accounting, payroll, or tax matters, write to us directly and we will reply promptly."}
            </p>
            <p className="contact-promise">{homeContent.contactPromise}</p>
            <div className="contact-primary-actions">
              <a
                href={`mailto:${homeContent.contactEmail}`}
                className="button contact-button-primary"
              >
                {safeLocale === "ro" ? "Cere o ofertă" : "Request a quote"}
              </a>
            </div>
            <div className="contact-secondary-actions">
              <a
                href={`https://wa.me/${homeContent.whatsappNumber}`}
                className="contact-secondary-link whatsapp-link"
                target="_blank"
                rel="noreferrer"
              >
                {safeLocale === "ro" ? "Scrie pe WhatsApp" : "Message us on WhatsApp"}
              </a>
              <a
                href={homeContent.mapsUrl}
                className="contact-secondary-link"
                target="_blank"
                rel="noreferrer"
              >
                Google Maps
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-row">
              <p className="contact-label">Email</p>
              <a href={`mailto:${homeContent.contactEmail}`} className="contact-value">
                {homeContent.contactEmail}
              </a>
            </div>

            <div className="contact-row">
              <p className="contact-label">
                {safeLocale === "ro" ? "Telefon România" : "Romania phone"}
              </p>
              <a href={`tel:${homeContent.contactPhone}`} className="contact-value">
                {primaryPhoneDisplay}
              </a>
            </div>

            <div className="contact-row">
              <p className="contact-label">
                {safeLocale === "ro" ? "Telefon Italia" : "Italy phone"}
              </p>
              <a href={`tel:${homeContent.contactPhoneSecondary}`} className="contact-value">
                {secondaryPhoneDisplay}
              </a>
            </div>

            <div className="contact-row">
              <p className="contact-label">{safeLocale === "ro" ? "Adresa" : "Address"}</p>
              <p className="contact-value">{homeContent.contactCity}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
